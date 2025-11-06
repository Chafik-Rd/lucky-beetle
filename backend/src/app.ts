import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import { centralizedError } from "./middleware/centralizedError";
import { HttpError } from "./types/types";
import apiRoutes from "./api/router/router";

// Load environment variables from .env file
dotenv.config();

const app: Application = express();

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
app.use("/api", apiRoutes);

// 404 Not Found Middleware
app.use((req, res, next) => {
  const error: HttpError = new Error("Not found...");
  error.status = 404;
  next(error);
});

// Centralized Error Handling Middleware
app.use(centralizedError);

export { app };
