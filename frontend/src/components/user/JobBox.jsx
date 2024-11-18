import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../user/Badge";
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaRegBookmark } from "react-icons/fa";
import { formatTimeAgo } from "../../lib/dateTimeConvert";

export default function JobBox({ jobs }) {
  
  return (
    <div className="container max-w-[85rem] mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Link
              to={`/job/${job.id}`}
              key={job.id}
              className="card overflow-hidden border rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="px-6 py-4 pb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={job.logo || "https://via.placeholder.com/40"}
                      alt={job.company || "Company Logo"}
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <h3 className="text-lg text-gray-950 font-semibold">{job.employer}</h3>
                      <p className="job-location flex items-center">
                        <FaMapMarkerAlt className="mr-1" /> {job.location || "Location not provided"}
                      </p>
                    </div>
                  </div>
                  <a className="bookmark-job" href="#!">
                    <FaRegBookmark className="text-gray-800" /> 
                  </a>
                </div>
              </div>
              <div className="px-6 py-4">
                <h6 className="text-l text-gray-950 font-semibold mb-2">{job.title}</h6>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <span className="job-type flex items-center">
                    <FaBriefcase className="mr-1" /> {job.job_type || "N/A"}
                  </span>
                  <span className="job-time flex items-center">
                    <FaClock className="mr-1" /> {formatTimeAgo(job.posted_at) || "N/A"}
                  </span>
                </div>
                <p className="text-sm text-gray-800 mb-4">
                  {job.description || "No description available."}
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  {job.skills?.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div> */}
              </div>
              <div className="flex justify-between items-center px-6 py-4 border-t">
                <span className="text-xl font-semibold text-blue-600">
                  {job.salary_range || "$0"}<span className="text-sm font-normal text-gray-600">/Hour</span>
                </span>
                <a
                  className="btn-job-apply inline-flex justify-center items-center gap-x-3 text-center py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  href={`/apply/${job.id}`}
                >
                  Apply Now
                </a>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-500">No jobs available at the moment.</div>
        )}
      </div>
    </div>
  );
}
