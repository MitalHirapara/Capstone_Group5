import React from 'react'

export default function () {
    return (
        <>
            <div className="relative pb-50 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')]  before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left">
                            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                                Unlock Your Career Potential with<p> </p>
                                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                                    CAREERTRAIL
                                </span>
                            </h1>
                            <div className="mt-5 max-w-3xl">
                                <p className="text-lg text-gray-600 dark:text-neutral-400">
                                    Whether you're building your resume, posting a job, or searching for the perfect opportunity, CareerTrail is your one-stop platform to simplify and accelerate your career journey. Start today and take the next step towards success!
                                </p>
                            </div>
                            <div className="mt-8 gap-3 flex">
                                <a
                                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                                    href="#"
                                >
                                    Get started
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
                                <button
                                    type="button"
                                    className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Build a Resume
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="./public/Job hunt-amico.svg"
                                alt="CareerTrail Overview"
                                className="rounded-lg "
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
