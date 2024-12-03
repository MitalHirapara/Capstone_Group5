import React from 'react';
import { FaIndustry, FaLayerGroup, FaMoneyBillWave, FaRegClock, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { formatTimeAgo } from '../../lib/dateTimeConvert';

const JobInfo = ({ job }) => {

  if (!job) {
    return <div>Loading...</div>; // Handle the case when job data is not yet available
  }

  return (
    <div className="bg-white mt-10 p-6 rounded-lg job-overview">
      {/* Title and Divider */}
      <h2 className="mb-4 font-bold text-2xl text-gray-900">Overview</h2>
      <hr className="border-gray-300 mb-6" />

      {/* Job Details Grid */}
      <div className="gap-4 grid grid-cols-2 p-6">
        <div className="flex job-overview-icon">
          <FaIndustry className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Industry</p>
          <span className="pl-6 text-[#05264e] capitalize">{job.industry?.name}</span>
        </div>
        <div className="flex job-overview-icon">
          <FaLayerGroup className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Job level</p>
          <span className="pl-6 text-[#05264e] capitalize">{job.experience_level} Level</span>
        </div>
        <div className="flex job-overview-icon">
          <FaMoneyBillWave className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Salary</p>
          <span className="pl-6 text-[#05264e]">{job.salary_range
            ? `${job.salary_range}`
            : job.min_salary && job.max_salary
              ? `$${job.min_salary} - $${job.max_salary}`
              : "Negotiable"
          }
            {(job.salary_range || (job.min_salary && job.max_salary)) && (
              <span className="font-normal text-gray-600 text-sm">
                /hr
              </span>
            )}</span>
        </div>
        <div className="flex job-overview-icon">
          <FaRegClock className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Experience</p>
          <span className="pl-6 text-[#05264e]">
            {job.experience_level === 'entry' ? '0-2 years' :
              job.experience_level === 'intermediate' ? '2-5 years' :
                job.experience_level === 'midsenior' ? '5-8 years' :
                  job.experience_level === 'senior' ? '8+ years' : ''}
          </span>
        </div>
        <div className="flex job-overview-icon">
          <FaBriefcase className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Job type</p>
          <span className="pl-6 text-[#05264e] capitalize">{job.job_type}</span>
        </div>
        <div className="flex job-overview-icon">
          <FaCalendarAlt className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Deadline</p>
          <span className="pl-6 text-[#05264e]">25/12/2024</span>
        </div>
        <div className="flex job-overview-icon">
          <FaCalendarAlt className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Updated</p>
          <span className="pl-6 text-[#05264e]">{job.posted_at
            ? formatTimeAgo(job.posted_at)
            : "N/A"}</span>
        </div>
        <div className="flex job-overview-icon">
          <FaMapMarkerAlt className="mt-1 mr-2 text-[#66789c]" />
          <p className="mr-1 text-[#66789c]">Location</p>
          <span className="pl-6 text-[#05264e]">{job.location
            ? `${job.location.city}, ${job.location.state}`
            : "Location not provided"}</span>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
