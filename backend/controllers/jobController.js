import Job from "../models/jobModel.js";

// Add Job Controller
export const addJob = async (req, res) => {
  try {
    const { company, role, status, appliedDate, link } = req.body;

    if (!company || !role || !appliedDate) {
      return res
        .status(400)
        .json({ message: "Company, Role, and Date are required." });
    }

    const newJob = await Job.create({
      company,
      role,
      status,
      appliedDate,
      link,
    });

    res.status(201).json({
      message: "Job Created Successfully!",
      job: newJob,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get job by id
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const job = await Job.find().sort({ appliedDate: -1 });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update status the job
export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete job
export const deleteJob = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteJob = await Job.findByIdAndDelete(id);
        res.status(200).json({message:"Job deleted Successfully!",deleteJob});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
