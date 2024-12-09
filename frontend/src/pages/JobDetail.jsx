import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import JobHeader from '../components/user/JobHeader';
import JobInfo from '../components/user/JobInfo';
import JobDescription from '../components/user/JobDescription';
import CompanyDetails from '../components/user/CompanyDetails';
import RelatedJobs from '../components/user/RelatedJobs';
import PreviousJobs from '../components/user/PreviousJobs';

const JobDetail = () => {
    
    const { id } = useParams(); 
    
    const [job, setJob] = useState(null); 
    
    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/job/detail/${id}/`);
            setJob(response.data); 
        } catch (error) {
            console.error("Error fetching job details:", error);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        fetchJobDetails(); 
    }, [id]); 
    
    return (
        <>
            <div className='mx-auto mt-10 mb-6 max-w-[85rem]'>
                <div className="flex md:flex-row flex-col">
                    {/* Left Column */}
                    <div className="box-border-single w-full md:w-3/4">
                        <JobHeader job={job} />
                        <JobInfo job={job} />
                        <JobDescription job={job} />
                    </div>

                    {/* Right Column */}
                    <aside className="md:mt-0 md:ml-8 w-full md:w-1/4">
                        <CompanyDetails job={job} />
                        <PreviousJobs jobId={id} />
                    </aside>
                </div>
                <div>
                    <RelatedJobs id={id} />
                </div>
            </div>
        </>
    );
};

export default JobDetail;
