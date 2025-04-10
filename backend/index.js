import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import jobRoutes from "./routes/jobRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/job", jobRoutes);

// server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
