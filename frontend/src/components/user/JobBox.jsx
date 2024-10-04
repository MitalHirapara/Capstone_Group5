import React from "react";


import Badge from "../user/Badge";
import { FaMapMarkerAlt, FaClock, FaBriefcase } from "react-icons/fa";

export default function JobBox() {
  const jobs = [
    {
      logo: "https://img.icons8.com/color/48/duolingo-logo.png",
      company: "LinkedIn",
      title: "UI / UX Designer fulltime",
      location: "New York, US",
      type: "Full time",
      postedAgo: "4 minutes ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.",
      skills: ["Adobe XD", "Figma", "Photoshop"],
      rate: "$500",
    },
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
  ]

  return (
    <div className="container max-w-[90rem] mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="card overflow-hidden">
            <div className="px-6 py-4 pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={job.logo} alt={job.company} className="w-10 h-10 rounded" />
                  <div>
                    <h3 className="text-lg text-gray-950 font-semibold">{job.company}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <FaMapMarkerAlt className="mr-1" /> {job.location} {/* Location icon */}
                    </p>
                  </div>
                </div>
                <svg
                  className=" h-5 w-5 text-green-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-bold mb-2">{job.title}</h4>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span className="flex text-gray-600 items-center"><FaBriefcase className="mr-1" /> {job.type} {/* Job type icon */}</span>
                <span className="flex text-gray-600 items-center"><FaClock className="mr-1" /> {job.postedAgo} {/* Posted time icon */}</span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-t">
              <span className="text-2xl font-bold text-blue-600">{job.rate}<span className="text-sm text-gray-500">/Hour</span></span>
              <div>
                        <a
                            className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                            href="/jobs"
                        >
                            Search Jobs
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
