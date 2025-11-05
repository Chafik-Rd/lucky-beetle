import express from "express";
import helmet from "helmet";
import cors from "cors";

import { centralizedError } from "./middleware/centralizedError";
import { connectToMongoDB } from "./config/mongo";
import { HttpError } from "./types/types";
import apiRoutes from "./router/router";

const app = express();

// Trust Proxy Middleware (if behind a proxy like Nginx)
app.set("trust proxy", 1);

// Security Middleware
app.use(helmet());

// CORS Middleware
const corsOption = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "https://lucky-beetle.vercel.app",
  ],
  credentials: true, // ✅ allow cookies to be sent
};
app.use(cors(corsOption));

// Body Parser Middleware
app.use(express.json());

// API Routes
app.use(apiRoutes);

// 404 Not Found Middleware
app.use((req, res, next) => {
  const error: HttpError = new Error("Not found...");
  error.status = 404;
  next(error);
});

// Centralized Error Handling Middleware
app.use(centralizedError);

const port = process.env.PORT || 3000;
// Start the server after connecting to MongoDB
(async () => {
  try {
    await connectToMongoDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port} ✅`);
    });
  } catch (err) {
    console.error("‼️ Startup error:", err);
    process.exit(1);
  }
})();

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err: HttpError) => {
  console.error("💥 Unhandled Rejection:", err.message);
  process.exit(1);
});
