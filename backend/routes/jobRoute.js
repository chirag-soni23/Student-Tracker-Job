import express from "express";
import { addJob, deleteJob, getAllJobs, getJobById, updateStatus } from "../controllers/jobController.js";

const router = express.Router();

router.post("/create",addJob);
router.get("/get/:id",getJobById);
router.get("/getall",getAllJobs);
router.put("/update/:id",updateStatus);
router.delete("/delete/:id",deleteJob);

export default router;