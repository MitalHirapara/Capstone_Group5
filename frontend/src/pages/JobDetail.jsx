import React from 'react';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import JobHeader from '../components/user/JobHeader';
import JobInfo from '../components/user/JobInfo';
import JobDescription from '../components/user/JobDescription';
import CompanyDetails from '../components/user/CompanyDetails';
import RelatedJobs from '../components/user/RelatedJobs';
import PreviousJobs from '../components/user/PreviousJobs';

const JobDetail = () => {
    // Fetch the job id from the URL
    const { id } = useParams();

    return (
        <>
            <div className='max-w-[85rem] mt-10 mb-6 mx-auto'>
                <div className="flex flex-col md:flex-row">
                    {/* Left Column */}
                    <div className="box-border-single w-full md:w-3/4">
                        <JobHeader jobId={id} />
                        <JobInfo jobId={id} />
                        <JobDescription jobId={id} />
                    </div>

                    {/* Right Column */}
                    <aside className="w-full md:w-1/4 md:mt-0 md:ml-8">
                        <CompanyDetails jobId={id} />
                        <PreviousJobs jobId={id} />
                    </aside>
                </div>
                <div>
                    <RelatedJobs jobId={id} />
                </div>
            </div>
        </>
    );
};

export default JobDetail;
