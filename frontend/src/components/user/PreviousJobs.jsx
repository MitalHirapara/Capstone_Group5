import React from 'react'

import Badge from "../user/Badge";

import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark, FaArrowRight, FaBullhorn } from "react-icons/fa";

export default function PreviousJobs() {
  // const jobs = [
  //   {
  //     logo: "https://img.icons8.com/fluency/48/facebook.png",
  //     company: "Adobe Illustrator",
  //     title: "Full Stack Engineer",
  //     location: "New York, US",
  //     type: "Part time",
  //     postedAgo: "5 minutes ago",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.",
  //     skills: ["React", "NodeJS"],
  //     rate: "$800",
  //   },
  //   {
  //     logo: "https://img.icons8.com/color/48/duolingo-logo.png",
  //     company: "Bing Search",
  //     title: "Java Software Engineer",
  //     location: "New York, US",
  //     type: "Full time",
  //     postedAgo: "6 minutes ago",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.",
  //     skills: ["Python", "AWS", "Photoshop"],
  //     rate: "$250",
  //   },
  //   {
  //     logo: "https://img.icons8.com/fluency/48/facebook.png",
  //     company: "Bing Search",
  //     title: "Java Software Engineer",
  //     location: "New York, US",
  //     type: "Full time",
  //     postedAgo: "6 minutes ago",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.",
  //     skills: ["Python", "AWS", "Photoshop"],
  //     rate: "$250",
  //   }
  // ]

  return (
    // <div className="box-border-right mx-auto mt-8 pr-3 pl-3 max-w-[85rem] container">
    //     <h3 className="mt-4 mb-3 ml-3 font-semibold text-gray-900 text-xl">Our Previous Jobs</h3>
    //     <hr className="border-gray-300 mt-2 mb-6" />
    //   <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mb-6">
    //     {jobs.map((job, index) => (
    //       <div key={index} className="overflow-hidden card">
    //         <div className="px-6 py-4 pb-0">
    //           <div className="flex justify-between items-center">
    //             <div className="flex items-center space-x-4">
    //               <img src={job.logo} alt={job.company} className="rounded w-10 h-10" />
    //               <div>
    //                 <h3 className="font-semibold text-gray-950 text-lg">{job.company}</h3>
    //                 <p className="flex items-center job-location">
    //                   <FaMapMarkerAlt className="mr-1 job-location" /> {job.location} {/* Location icon */}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="px-6 py-4">
    //           <h6 className="mb-2 font-semibold text-gray-950 text-l">{job.title}</h6>
    //           <div className="flex items-center space-x-2 mb-2 text-gray-500 text-sm">
    //             <span className="flex items-center job-type"><FaBriefcase className="mr-1 job-type" /> {job.type} {/* Job type icon */}</span>
    //             <span className="flex items-center job-time"><FaClock className="mr-1 job-time" /> {job.postedAgo} {/* Posted time icon */}</span>
    //           </div>
    //           <p className="mb-4 text-gray-800 text-sm">{job.description}</p>
    //           <div className="flex flex-wrap gap-2">
    //             {job.skills.map((skill, skillIndex) => (
    //               <Badge key={skillIndex} variant="secondary">
    //                 {skill}
    //               </Badge>
    //             ))}
    //           </div>
    //         </div>
    //         <div className="flex justify-between items-center px-6 py-4 border-t">
    //           <span className="font-semibold text-blue-600 text-xl">{job.rate}<span className="font-normal text-gray-600 text-sm">/Hour</span></span>
    //           <div>
    //             <a
    //               className="inline-flex justify-center items-center gap-x-3 px-4 py-3 text-center btn-job-apply"
    //               href="/jobs"
    //             >
    //               Apply Now
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="box-border-right flex justify-center items-center mt-6 job-addver">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl overflow-hidden">
        <div className="relative p-8 md:p-12">
          {/* Background Pattern */}
          <div className="top-0 left-0 absolute bg-gradient-to-br from-blue-50 to-transparent opacity-50 w-full h-full" />

          {/* Content */}
          <div className="relative">
            <div className="mb-2 font-medium text-blue-600 text-sm">WE ARE</div>
            <h1 className="mb-4 font-bold text-4xl text-slate-800 md:text-5xl">
              HIRING
            </h1>
            <p className="mb-8 max-w-md text-slate-600">
              Join our dynamic team and be part of something extraordinary.
              We're looking for passionate individuals to help shape the future.
            </p>

            <button className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 shadow-md hover:shadow-lg px-6 py-3 rounded-lg text-white transition-all duration-300 group">
              Know More
              <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="right-0 bottom-0 absolute transform translate-y-1/4">
            <div className="relative w-48 h-48">
              <div className="right-0 bottom-0 absolute">
                <FaBullhorn className="w-16 h-16 text-blue-400 transform -rotate-12" />
              </div>
              <div className="top-0 left-0 absolute bg-blue-100 opacity-20 rounded-full w-32 h-32" />
              <div className="right-8 bottom-8 absolute bg-blue-200 opacity-20 rounded-full w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

