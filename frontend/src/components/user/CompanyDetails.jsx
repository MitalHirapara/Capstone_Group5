import React from 'react'
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";


const CompanyDetails = ({ job }) => {

    if (!job) {
        return <div>Loading...</div>; // Handle the case when job data is not yet available
    }
    console.log(job);

    return (
        <>
            <div className="box-border-right bg-white mt-4 p-6 company-information">
                <div className='flex items-center text-gray-900 company-info'>
                    {job ? (
                        job.logo ? (
                            <img
                                src={job.employer?.company_logo}
                                alt={job.employer?.company_name || "Company Logo"}
                                className="rounded w-10 h-10"
                            />
                        ) : (
                            <div className="flex justify-center items-center bg-blue-500 rounded w-10 h-10 font-bold text-white text-xl">
                                {job.employer?.company_name ? job.employer?.company_name?.charAt(0) : "?"}
                            </div>
                        )
                    ) : null}
                    <div className='ml-4'>
                        <h3 className="font-bold text-lg">{job.employer?.company_name}</h3>
                        <p className="flex items-center job-location">
                            <FaMapMarkerAlt className="mr-1 job-location" /> {job.location
                                ? `${job.location.city}, ${job.location.state}`
                                : "Location not provided"}
                        </p>
                    </div>
                </div>


                <hr className="border-gray-300 mt-6 mb-6" />


                <div className="mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.212636816657!2d-87.62442198454627!3d41.8853734714187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cae382e3b0f%3A0x897d37476d19a065!2s205%20N%20Michigan%20Ave%20%23810%2C%20Chicago%2C%20IL%2060601%2C%20USA!5e0!3m2!1sen!2sus!4v1699631097884!5m2!1sen!2sus"
                        class="w-72 md:w-full ms:w-full"
                        height="300"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>



                    <ul className="mt-4 mb-4 pl-5 font-normal text-gray-500 text-sm list-disc">

                        <li className='mt-8 mb-4'>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                        <li className='mt-4 mb-4'><strong>Phone: </strong>+1 (123) 456-7890</li>
                        <li className='mt-4 mb-4'><strong>Email: </strong>contact@ejara.com</li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default CompanyDetails;

