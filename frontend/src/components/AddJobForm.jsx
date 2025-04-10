import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobData } from "../context/JobContext";

const AddJobForm = () => {
  const { addJob, btnLoading } = JobData();
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    company: "",
    role: "",
    status: "Pending",
    appliedDate: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(jobData);
    navigate("/jobs");
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
        Add a New Job Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Company</label>
          <input
            type="text"
            name="company"
            placeholder="e.g., Microsoft"
            value={jobData.company}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Role</label>
          <input
            type="text"
            name="role"
            placeholder="e.g., SDE Intern"
            value={jobData.role}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Status</label>
          <select
            name="status"
            value={jobData.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="Pending">Pending</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Applied Date</label>
          <input
            type="date"
            name="appliedDate"
            value={jobData.appliedDate}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Application Link</label>
          <input
            type="url"
            name="link"
            placeholder="https://careers.microsoft.com"
            value={jobData.link}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          disabled={btnLoading}
          className="w-full bg-indigo-500 text-white font-medium py-2 rounded-xl hover:bg-indigo-600 transition-all"
        >
          {btnLoading ? "Adding..." : "Add Job"}
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
