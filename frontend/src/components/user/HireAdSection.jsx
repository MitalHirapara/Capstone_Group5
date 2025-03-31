import React from "react";

export default function HireAdSection() {
    return (

        <div className='lg:block hidden mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 max-w-[75rem] hirejob'>
            <div className="flex flex-col border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 m-1 p-12 md:p-12 border rounded-xl hirejobsec">
                <div className="flex items-center gap-x-3 jobimgcons">

                    <div className="flex justify-center items-end grow jobimgcon">
                        <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                            <p className='hireadsechead'>We are</p>
                            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent hireadheading">
                                Hiring
                            </span>
                        </h3>
                        <p>
                            <p className="text-gray-500 text-xs dark:text-neutral-500 uppercase hireadtext">
                                Let’s <span className='hirehighlight'>Work</span> Together
                                <p>& <span className='hirehighlight'>Explore</span> Opportunities</p>
                            </p>
                        </div>
                        <a
                            className="inline-flex justify-center items-center gap-x-3 bg-blue-600 from-blue-600 hover:from-violet-600 focus:from-violet-600 to-violet-600 hover:to-blue-600 focus:to-blue-600 px-4 py-3 border border-transparent rounded-md font-medium text-center text-sm text-white focus:outline-none"
                            href="/jobs"
                        >
                            Get Hired
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
        </div>
    );
}
