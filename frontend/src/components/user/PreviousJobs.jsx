import React from 'react'

import Badge from "../user/Badge";
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function PreviousJobs() {
  const jobs = [
    {
      logo: "https://img.icons8.com/fluency/48/facebook.png",
      company: "Adobe Illustrator",
      title: "Full Stack Engineer",
      location: "New York, US",
      type: "Part time",
      postedAgo: "5 minutes ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.",
      skills: ["React", "NodeJS"],
      rate: "$800",
    },
    {
      logo: "https://img.icons8.com/color/48/duolingo-logo.png",
      company: "Bing Search",
      title: "Java Software Engineer",
      location: "New York, US",
      type: "Full time",
      postedAgo: "6 minutes ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.",
      skills: ["Python", "AWS", "Photoshop"],
      rate: "$250",
    },
    {
      logo: "https://img.icons8.com/fluency/48/facebook.png",
      company: "Bing Search",
      title: "Java Software Engineer",
      location: "New York, US",
      type: "Full time",
      postedAgo: "6 minutes ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.",
      skills: ["Python", "AWS", "Photoshop"],
      rate: "$250",
    }
  ]

  return (
    <div className="box-border-right container max-w-[85rem] mx-auto mt-8 pl-3 pr-3">
        <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3 ml-3">Our Previous Jobs</h3>
        <hr className="border-gray-300 mb-6 mt-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-6">
        {jobs.map((job, index) => (
          <div key={index} className="card overflow-hidden">
            <div className="px-6 py-4 pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={job.logo} alt={job.company} className="w-10 h-10 rounded" />
                  <div>
                    <h3 className="text-lg text-gray-950 font-semibold">{job.company}</h3>
                    <p className="job-location flex items-center">
                      <FaMapMarkerAlt className="job-location mr-1" /> {job.location} {/* Location icon */}
                    </p>
                  </div>
                </div>
                <a className="bookmark-job" href="#">
                  <FaRegBookmark className="text-gray-800" /> 
                </a>
              </div>
            </div>
            <div className="px-6 py-4">
              <h6 className="text-l text-gray-950 font-semibold mb-2">{job.title}</h6>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span className="job-type flex  items-center"><FaBriefcase className="job-type mr-1" /> {job.type} {/* Job type icon */}</span>
                <span className="job-time flex items-center"><FaClock className="job-time mr-1" /> {job.postedAgo} {/* Posted time icon */}</span>
              </div>
              <p className="text-sm text-gray-800 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-t">
              <span className="text-xl font-semibold text-blue-600">{job.rate}<span className="text-sm font-normal text-gray-600">/Hour</span></span>
              <div>
                <a
                  className="btn-job-apply inline-flex justify-center items-center gap-x-3 text-center py-3 px-4"
                  href="/jobs"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

