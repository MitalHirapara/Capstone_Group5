import React, { useEffect, useState } from "react";
import axios from "axios";
import JobFilterHead from '../components/user/JobFilterHead';
import JobBox from '../components/user/JobBox';
import JobSortBar from '../components/user/JobSortBar';

export default function Jobs() {
  const [jobs, setJobs] = useState([]); 
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [jobTypes, setJobTypes] = useState([]); 
  const [postedTimes, setPostedTimes] = useState([]); 
  const [queryIndustry, setQueryIndustry] = useState("");
  const [queryLocation, setQueryLocation] = useState("");
  const [queryJobTitle, setQueryJobTitle] = useState("");
  const [queryJobType, setQueryJobType] = useState(""); 
  const [queryPostedTime, setQueryPostedTime] = useState(""); 

  // Fetch jobs from the API
  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/jobs/");
      setJobs(response.data);
      setFilteredJobs(response.data); 
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Fetch job filters from the API
  const fetchJobFilters = async () => {
    try {
      const response = await axios.get("http://localhost:8000/job-filters/"); 
      setJobTypes(response.data.job_types); 
      setPostedTimes(response.data.posted_times); 
    } catch (error) {
      console.error("Error fetching job filters:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchJobFilters(); 
  }, []);
  
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      return (
        (queryIndustry === "" || job.employer.toLowerCase().includes(queryIndustry.toLowerCase())) &&
        (queryLocation === "" || job.location.toLowerCase().includes(queryLocation.toLowerCase())) &&
        (queryJobTitle === "" || job.title.toLowerCase().includes(queryJobTitle.toLowerCase())) &&
        (queryJobType === "" || job.job_type.toLowerCase().includes(queryJobType.toLowerCase())) &&
        (queryPostedTime === "" || new Date(job.date_posted) >= new Date(queryPostedTime)) 
      );
    });
    setFilteredJobs(filtered);
  }, [queryIndustry, queryLocation, queryJobTitle, queryJobType, queryPostedTime, jobs]);

  return (
    <>
      <JobFilterHead
        params={{
          queryIndustry,
          setQueryIndustry,
          queryLocation,
          setQueryLocation,
          queryJobTitle,
          setQueryJobTitle,
          queryJobType,
          setQueryJobType,
          queryPostedTime,
          setQueryPostedTime,
          jobTypes, 
          postedTimes, 
        }}
      />
      <JobSortBar jobs={filteredJobs} />
      <JobBox jobs={filteredJobs} />
    </>
  );
}
