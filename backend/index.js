import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import jobRoutes from "./routes/jobRoute.js";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/job", jobRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

// server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
