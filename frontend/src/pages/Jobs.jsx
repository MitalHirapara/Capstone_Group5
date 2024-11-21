import React, { useEffect, useState } from "react";
import axios from "axios";
import JobFilterHead from "../components/user/JobFilterHead";
import JobBox from "../components/user/JobBox";
import JobSortBar from "../components/user/JobSortBar";

export default function Jobs() {
    const [jobs, setJobs] = useState([]); // Original fetched jobs
    const [filteredJobs, setFilteredJobs] = useState([]); // Jobs after filtering
    const [jobTypes, setJobTypes] = useState([]); // Job types fetched from the API
    const [postedTimes, setPostedTimes] = useState([]); // Posted times fetched from the API
    const [queryIndustry, setQueryIndustry] = useState("");
    const [queryLocation, setQueryLocation] = useState("");
    const [queryJobTitle, setQueryJobTitle] = useState("");
    const [queryJobType, setQueryJobType] = useState(""); // Job Type filter
    const [queryPostedTime, setQueryPostedTime] = useState(""); // Posted Time filter

    // Fetch jobs from the API
    const fetchJobs = async () => {
        try {
            const response = await axios.get("http://localhost:8000/jobs/");
            console.log(response.data);
            setJobs(response.data);
            setFilteredJobs(response.data); // Initialize filteredJobs with all jobs
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    // Fetch job types and posted times from the API
    const fetchJobFilters = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/job-filters/"
            ); // Endpoint for job types and posted times
            setJobTypes(response.data.job_types); // Set the fetched job types
            setPostedTimes(response.data.posted_times); // Set the fetched posted times
        } catch (error) {
            console.error("Error fetching job filters:", error);
        }
    };

    useEffect(() => {
        fetchJobs();
        fetchJobFilters(); // Fetch job types and posted times on component mount
    }, []);

    // Apply filters dynamically
    useEffect(() => {
        const filtered = jobs.filter((job) => {
            return (
                (queryIndustry === "" ||
                    job.employer
                        .toLowerCase()
                        .includes(queryIndustry.toLowerCase())) &&
                (queryLocation === "" ||
                    job.location
                        .toLowerCase()
                        .includes(queryLocation.toLowerCase())) &&
                (queryJobTitle === "" ||
                    job.title
                        .toLowerCase()
                        .includes(queryJobTitle.toLowerCase())) &&
                (queryJobType === "" ||
                    job.job_type
                        .toLowerCase()
                        .includes(queryJobType.toLowerCase())) &&
                (queryPostedTime === "" ||
                    new Date(job.date_posted) >= new Date(queryPostedTime))
            );
        });
        setFilteredJobs(filtered);
    }, [
        queryIndustry,
        queryLocation,
        queryJobTitle,
        queryJobType,
        queryPostedTime,
        jobs,
    ]);

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
                    jobTypes, // Passing the fetched job types
                    postedTimes, // Passing the fetched posted times
                }}
            />
            <JobSortBar jobs={filteredJobs} />
            <JobBox jobs={filteredJobs} />
        </>
    );
}
