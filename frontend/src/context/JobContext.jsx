import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJob] = useState([]);
  const [singleJob, setSingleJob] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  // Add a new job
  async function addJob(jobData) {
    setBtnLoading(true);
    try {
      const res = await axios.post("/api/job/create", jobData);
      setJob((prev) => [...prev, res.data.job]);
      toast.success(res.data.message || "Job added successfully");
    } catch (error) {
      console.error("Error while adding job:", error.message);
      toast.error(error.response?.data?.message || "Failed to add job");
    } finally {
      setBtnLoading(false);
    }
  }

  // Get all jobs
  async function getAllJobs() {
    setLoading(true);
    try {
      const res = await axios.get("/api/job/getall");
      setJob(res.data);
    } catch (error) {
      console.error("Error while fetching all jobs:", error.message);
      toast.error("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllJobs();
    // getJobById();
  }, []);

  // Get a single job by ID
  async function getJobById(id) {
    setLoading(true);
    try {
      const res = await axios.get(`/api/job/get/${id}`);
      setSingleJob(res.data);
    } catch (error) {
      console.error("Error while fetching job:", error.message);
      toast.error("Failed to fetch job");
    } finally {
      setLoading(false);
    }
  }

  // Update job status
  async function updateJobStatus(id, status) {
    setBtnLoading(true);
    try {
      const res = await axios.put(`/api/job/update/${id}`, { status });
      const updatedJob = res.data.job;
      setJob((prev) =>
        prev.map((j) => (j._id === updatedJob._id ? updatedJob : j))
      );
      toast.success(res.data.message || "Job updated");
    } catch (error) {
      console.error("Error while updating job:", error.message);
      toast.error(error.response?.data?.message || "Failed to update job");
    } finally {
      setBtnLoading(false);
    }
  }

  // Delete job
  async function deleteJob(id) {
    setBtnLoading(true);
    try {
      const res = await axios.delete(`/api/job/delete/${id}`);
      setJob((prev) => prev.filter((j) => j._id !== id));
      toast.success(res.data.message || "Job deleted");
    } catch (error) {
      console.error("Error while deleting job:", error.message);
      toast.error("Failed to delete job");
    } finally {
      setBtnLoading(false);
    }
  }

  return (
    <JobContext.Provider
      value={{
        jobs,
        singleJob,
        loading,
        btnLoading,
        addJob,
        getAllJobs,
        getJobById,
        updateJobStatus,
        deleteJob,
        setJob
      }}
    >
      {children}
      <Toaster />
    </JobContext.Provider>
  );
};

// Custom hook for easy access
export const JobData = () => useContext(JobContext);
