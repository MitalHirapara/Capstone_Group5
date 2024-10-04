import React from 'react'

export default function GuideSection() {
    return (
        <div className="guideprocesssec relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 text-center">
                <div className="guidesec max-w-2xl text-center mx-auto">
                    <p className="sub-heading inline-block text-sm font-medium bg-clip-text text-gray-500 ">
                        Just via some simple steps, you will find your ideal candidates you are looking for!
                    </p>

                    <div className="mt-5 max-w-2xl">
                        <h3 className="block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-neutral-200">
                            How It Works
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center space-x-10 mt-10">
                    {/* Step 1 */}
                    <div className="dashimg1 flex flex-col items-center">
                        <div className="bg-blue-100 rounded-full h-24 w-24 flex items-center justify-center">
                            <span className="text-blue-600 text-4xl font-bold">1</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-blue-950">Register an <p> account to start</p></h3>
                        <p className="text-gray-500 mt-2">Quickly create your account to access all features and begin your hiring journey seamlessly.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="dashimg2 flex flex-col items-center">
                        <div className="bg-blue-100 rounded-full h-24 w-24 flex items-center justify-center">
                            <span className="text-blue-600 text-4xl font-bold">2</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-blue-950">Explore over <p>thousands of resumes</p></h3>
                        <p className="text-gray-500 mt-2">Browse through thousands of qualified resumes, filtering candidates that perfectly match your job requirements.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-100 rounded-full h-24 w-24 flex items-center justify-center">
                            <span className="text-blue-600 text-4xl font-bold">3</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-blue-950"><p>Find the most </p> suitable candidate</h3>
                        <p className="text-gray-500 mt-2">Easily identify and select the best candidate for your role, ensuring a perfect fit for your team.</p>
                    </div>
                </div>

                <a
                    className="mt-8 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                    href="#"
                >
                   Start Your Journey
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
    )
}
