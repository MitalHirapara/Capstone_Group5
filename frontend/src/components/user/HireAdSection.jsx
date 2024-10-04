import React from 'react'

export default function HireAdSection() {
    return (
        <div className='hirejob max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16'>
            <div className="hirejobsec flex m-1 flex-col rounded-xl p-12 md:p-12 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
                <div className="jobimgcons flex items-center gap-x-3">

                    <div className="jobimgcon grow flex items-end justify-center">
                        <h3 className="block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-neutral-200">
                            <p className='hireadsechead'>We are</p>
                            <span className="hireadheading bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                                Hiring
                            </span>
                        </h3>
                        <p>
                            <p className="text-xs hireadtext uppercase text-gray-500 dark:text-neutral-500">
                                Let’s <span className='hirehighlight'>Work</span> Together
                                <p>& <span className='hirehighlight'>Explore</span> Opportunities</p>
                            </p>
                        </p>
                        <a
                            className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
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
    )
}
