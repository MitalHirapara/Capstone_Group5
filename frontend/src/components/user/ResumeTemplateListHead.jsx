import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

export default function ResumeTemplateListHead() {
    return (
        <div className='joblisthead max-w-[85rem] mt-6 mb-6 mx-auto sm:px-6 lg:px-8 py-10 lg:py-2 flex flex-col lg:flex-row items-center'>
            <div className="p-6 lg:w-1/2">
                <div className="guidesec max-w-2xl mb-10 mx-auto">
                    <div className="mb-5 max-w-2xl">
                        <h3 className=" block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-neutral-200">
                            Your Guide to Polished, Job-Winning Resumes
                        </h3>
                    </div>
                    <hr className='mb-5' />
                    <div className="inspo-text inline-block text-2xl font-medium bg-clip-text text-gray-950">
                        <FaQuoteLeft className='text-7xl'/>
                        <p>The future belongs to those who believe in the beauty of their dreams.</p>
                    </div>
                    
                    <p className="inline-block text-sm font-medium bg-clip-text text-gray-500">
                        Explore a curated list of top jobs and internships tailored to help you launch or grow your career. Start your journey here with roles across various industries, designed to fit your goals and skills. Let’s find the perfect match for your future.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <img src='Resume-bro.png' alt="Resume illustration" className="w-full max-w-sm lg:max-w-md" />
            </div>
        </div>

    )
}
