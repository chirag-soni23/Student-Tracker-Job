import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { JobData } from "../context/JobContext.jsx";
import { availableRoles } from "../constants/jobRole.js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Jobs = () => {
  const { jobs, updateJobStatus } = JobData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showAllRoles, setShowAllRoles] = useState(false);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  const handleRoleChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleAppliedJob = (id) => {
    const job = jobs.find((j) => j._id === id);
    if (job?.status === "Applied") {
      toast.error("You already applied for this job!");
      return;
    }

    if (confirm("Are you sure you want to apply for this job?")) {
      updateJobStatus(id, "Applied");
      setAppliedJobIds((prev) => [...prev, id]);
      toast.success("You applied for this job.");
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const jobRoleLower = job.role?.toLowerCase() || "";
    const matchesSearch = jobRoleLower.includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRoles.length === 0 ||
      selectedRoles.map((r) => r.toLowerCase()).includes(jobRoleLower);

    return matchesSearch && matchesRole;
  });

  const rolesToShow = showAllRoles
    ? availableRoles
    : availableRoles.slice(0, 3);

  const statusCount = jobs.reduce((acc, job) => {
    const status = job.status || "Unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="w-full p-6 md:p-10">
      <h1 className="text-xl font-semibold mb-6 text-indigo-600">
        Job Requisition
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {["Applied", "Interview", "Offer", "Rejected"].map((status) => (
          <div
            key={status}
            className={`p-4 rounded-lg shadow-sm border ${
              status === "Applied"
                ? "bg-indigo-100 text-indigo-700"
                : status === "Interview"
                ? "bg-blue-100 text-blue-700"
                : status === "Offer"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <p className="text-sm font-medium">{status}</p>
            <p className="text-xl font-semibold">{statusCount[status] || 0}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center border pl-4 gap-2 bg-white border-gray-300 h-[46px] rounded-full w-full md:max-w-md">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full h-full outline-none text-sm text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-500 w-28 h-9 rounded-full text-sm text-white mr-[5px]"
          >
            Search
          </button>
        </div>

        <Link
          to="/add-job"
          className="bg-indigo-500 px-4 h-11 rounded-full text-sm text-white flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all self-start md:self-auto"
        >
          <Plus size={18} /> Add Job
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
          <h2 className="font-medium text-gray-700 mb-4">Filter by Role</h2>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {rolesToShow.map((role) => (
              <label key={role} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                  className="accent-indigo-500"
                />
                {role}
              </label>
            ))}
            {availableRoles.length > 3 && (
              <button
                onClick={() => setShowAllRoles(!showAllRoles)}
                className="text-indigo-500 text-xs mt-2 text-left hover:underline"
              >
                {showAllRoles ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-700 font-medium">
              Results ({filteredJobs.length})
            </h2>
          </div>

          {filteredJobs.length === 0 ? (
            <p className="text-gray-500">No jobs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredJobs.map((job) => {
                const isApplied =
                  job.status === "Applied" || appliedJobIds.includes(job._id);
                return (
                  <div
                    key={job._id}
                    onClick={() => handleAppliedJob(job._id)}
                    className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm cursor-pointer hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-indigo-600">
                        {job.company}
                      </h3>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          job.status === "Pending"
                            ? "text-yellow-600 border-yellow-400 bg-yellow-100"
                            : job.status === "Interview"
                            ? "text-blue-600 border-blue-400 bg-blue-100"
                            : job.status === "Offer"
                            ? "text-green-600 border-green-400 bg-green-100"
                            : "text-red-600 border-red-400 bg-red-100"
                        }`}
                      >
                        {isApplied ? "Applied" : job.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      Role: {job.role}
                    </p>

                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-indigo-500 underline block mt-2"
                      >
                        View Application
                      </a>
                    )}

                    {job.createdAt && (
                      <p className="text-xs text-gray-400 mt-1">
                        Updated at:{" "}
                        {new Date(job.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
