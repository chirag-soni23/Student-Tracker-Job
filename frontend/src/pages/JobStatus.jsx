import React from "react";
import { JobData } from "../context/JobContext";

const JobStatus = () => {
  const { jobs } = JobData();

  const appliedJobs = jobs.filter((job) => job.status === "Applied");

  return (
    <div className="w-full p-6 md:p-10">
      <h1 className="text-xl font-semibold mb-6 text-indigo-600">
        Job Status
      </h1>

      {appliedJobs.length === 0 ? (
        <p className="text-gray-500">You haven't applied to any jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {appliedJobs.map((job) => (
            <div
              key={job._id}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold text-indigo-600">
                {job.company}
              </h3>
              <p className="text-xs text-gray-400 mt-1">Role: {job.role}</p>
              <p className="text-xs text-gray-400">Status: {job.status}</p>

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
                  Applied on:{" "}
                  {new Date(job.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobStatus;
