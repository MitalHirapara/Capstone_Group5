import React from "react";

export default function () {
    return (
        <>
            <div className="relative before:top-0 before:-z-[1] before:absolute before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-cover before:bg-no-repeat before:bg-top pb-50 before:transform before:-translate-x-1/2 overflow-hidden before:start-1/2 before:size-full">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 max-w-[85rem]">
                    <div className="flex lg:flex-row flex-col items-center gap-12">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left">
                            <h1 className="block font-bold text-4xl text-gray-800 md:text-5xl lg:text-6xl dark:text-neutral-200">
                                Unlock Your Career Potential with<p> </p>
                                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                                    CAREERTRAIL
                                </span>
                            </h1>
                            <div className="mt-5 max-w-3xl">
                                <p className="text-gray-600 text-lg dark:text-neutral-400">
                                    Whether you're building your resume, posting
                                    a job, or searching for the perfect
                                    opportunity, CareerTrail is your one-stop
                                    platform to simplify and accelerate your
                                    career journey. Start today and take the
                                    next step towards success!
                                </p>
                            </div>
                            <div className="flex gap-3 mt-8">
                                <a
                                    className="inline-flex justify-center items-center gap-x-3 bg-blue-600 from-blue-600 hover:from-violet-600 focus:from-violet-600 to-violet-600 hover:to-blue-600 focus:to-blue-600 px-4 py-3 border border-transparent rounded-md font-medium text-center text-sm text-white focus:outline-none"
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
                                    className="inline-flex relative items-center gap-x-2 border-gray-200 bg-white hover:bg-gray-50 focus:bg-gray-50 disabled:opacity-50 shadow-sm p-2 border rounded-lg font-mono text-gray-800 text-sm disabled:pointer-events-none focus:outline-none group ps-3"
                                >
                                    Build a Resume
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="mx-auto w-full sm:w-3/4 md:w-1/2">
                            <img
                                src="./public/Job hunt-amico.svg"
                                alt="CareerTrail Overview"
                                className="rounded-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
