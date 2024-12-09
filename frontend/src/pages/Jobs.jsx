import React, { useEffect, useState } from "react";
import axios from "axios";
import JobFilterHead from "../components/user/JobFilterHead";
import JobBox from "../components/user/JobBox";
import JobSortBar from "../components/user/JobSortBar";


export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [querypostedTimes, setQueryPostedTimes] = useState([]);
  const [queryIndustry, setQueryIndustry] = useState("");
  const [queryLocation, setQueryLocation] = useState("");
  const [queryJobTitle, setQueryJobTitle] = useState("");
  const [queryJobType, setQueryJobType] = useState("");
  const [queryPostedTime, setQueryPostedTime] = useState("");
  const [queryExperienceLevels, setExperienceLevels] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [querySort, setQuerySort] = useState("Default");
  const [startDate, setStartDate] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/jobs/");
      setJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchIndustries = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/job/industries/");
      setIndustries(response.data);
    } catch (error) {
      console.error("Error fetching industries:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchIndustries();
  }, []);

  useEffect(() => {
    const now = new Date();
    let calculatedStartDate = null;
    
    if (queryPostedTime === "now") {
      calculatedStartDate = now; 
    } else if (queryPostedTime === "last24hours") {
      calculatedStartDate = new Date(now.getTime() - 24 * 60 * 60 * 1000); // Last 24 hours
    } else if (queryPostedTime === "lastWeek") {
      calculatedStartDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // Last 7 days
    } else if (queryPostedTime === "lastMonth") {
      const lastMonth = new Date(now);
      lastMonth.setMonth(now.getMonth() - 1);
      calculatedStartDate = lastMonth; // Last 1 month
    } else if (queryPostedTime === "last3Months") {
      const lastThreeMonths = new Date(now);
      lastThreeMonths.setMonth(now.getMonth() - 3);
      calculatedStartDate = lastThreeMonths; // Last 3 months
    }
    
    // Convert to ISO string with date and time
    const formattedDate = calculatedStartDate
      ? calculatedStartDate.toISOString() // Full ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
      : null;
    
    console.log("calculatedStartDate with time:", formattedDate);
    setStartDate(formattedDate);
     
  }, [queryPostedTime]);
  

  useEffect(() => {
    let filtered = jobs.filter((job) => {
      return (
        (queryIndustry === "" || job.industry.id == queryIndustry) &&
        (queryLocation === "" || job.location.city.toLowerCase().includes(queryLocation.toLowerCase()) || job.location.state.toLowerCase().includes(queryLocation.toLowerCase())) &&
        (queryJobTitle === "" || job.title.toLowerCase().includes(queryJobTitle.toLowerCase())) &&
        (queryJobType === "" || job.job_type.toLowerCase().includes(queryJobType.toLowerCase())) &&
        (!startDate || job.posted_at.split("T")[0] >= startDate) &&
        (queryExperienceLevels.length === 0 || queryExperienceLevels == job.experience_level)
      );
    });

    // Sorting based on selected sort option
    if (querySort === "Ascending") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title)); // Ascending order based on job title
    } else if (querySort === "Descending") {
      filtered = filtered.sort((a, b) => b.title.localeCompare(a.title)); // Descending order based on job title
    } else if (querySort === "Default") {
      filtered = filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate)); // Sort by latest posted time
    }

    filtered = filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));

    setFilteredJobs(filtered);
  }, [queryIndustry, queryLocation, queryJobTitle, queryJobType, queryExperienceLevels, queryPostedTime, querySort, jobs, startDate]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    show: "8",
    sort: "Default",
  });

  const showOptions = ["2", "3", "4", "5", "6"];
  const sortOptions = ["Default", "Ascending", "Descending"];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleOptionSelect = (dropdown, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [dropdown]: option,
    }));
    setOpenDropdown(null);

    if (dropdown === "sort") {
      setQuerySort(option); 
    }
  };

  const totalJobs = filteredJobs.length;
  const jobsToShow = Math.min(totalJobs, parseInt(selectedOptions.show, 10));

  const displayedJobs = filteredJobs
  .sort((a, b) => b.id - a.id) 
  .slice(0, jobsToShow); 

  return (
    <>
      <JobFilterHead
        params={{
          queryIndustry,
          setQueryIndustry,
          industries,
          queryLocation,
          setQueryLocation,
          queryJobTitle,
          setQueryJobTitle,
          queryJobType,
          setQueryJobType,
          queryPostedTime,
          setQueryPostedTime,
          jobTypes,
          queryExperienceLevels,
          setExperienceLevels,
          experienceLevel,
          startDate,
        }}
      />
      <JobSortBar
        params={{
          selectedOptions,
          setSelectedOptions,
          showOptions,
          sortOptions,
          openDropdown,
          setOpenDropdown,
          jobsToShow,
          totalJobs,
          setQuerySort,
        }}
      />
      <JobBox jobs={displayedJobs} />
    </>
  );
}
