import React from 'react'
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";

const CompanyDetails = () => {
    return (
        <>
            <div className="bg-white box-border-right p-6 mt-4">
                <div className='company-info flex text-gray-900 items-center'>
                    <img src='/company-logo.png' />
                    <div className='ml-4'>
                        <h3 className="text-lg font-bold">LinkedIn</h3>
                        <p className="job-location flex items-center">
                            <FaMapMarkerAlt className="job-location mr-1" /> New York, US {/* Location icon */}
                        </p>
                    </div>
                </div>

                <hr className="border-gray-300 mb-6 mt-6" />

                <div className="mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.212636816657!2d-87.62442198454627!3d41.8853734714187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cae382e3b0f%3A0x897d37476d19a065!2s205%20N%20Michigan%20Ave%20%23810%2C%20Chicago%2C%20IL%2060601%2C%20USA!5e0!3m2!1sen!2sus!4v1699631097884!5m2!1sen!2sus"
                        width="300"
                        height="300"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <ul className="list-disc text-sm pl-5 text-gray-500 font-normal mb-4 mt-4">
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

