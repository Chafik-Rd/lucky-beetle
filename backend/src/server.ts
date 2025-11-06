import { app } from "./app";
import { connectToMongoDB } from "./config/mongo";
import { HttpError } from "./types/types";

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
