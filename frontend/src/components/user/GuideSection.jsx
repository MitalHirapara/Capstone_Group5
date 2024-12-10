import React from 'react'

export default function GuideSection() {
    return (
        <div className="relative z-10 guideprocesssec">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 max-w-[85rem] text-center">
                <div className="mx-auto max-w-2xl text-center guidesec">
                    <p className="inline-block bg-clip-text font-medium text-gray-500 text-sm sub-heading">
                        Just via some simple steps, you will find your ideal candidates you are looking for!
                    </p>

                    <div className="mt-5 max-w-2xl">
                        <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                            How It Works
                        </h3>
                    </div>
                </div>
                <div className="gap-10 grid grid grid-cols-1 lg:grid-cols-3 mt-10 employe-box">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center dashimg1">
                        <div className="flex justify-center items-center bg-blue-100 rounded-full w-24 h-24">
                            <span className="font-bold text-4xl text-blue-600">1</span>
                        </div>
                        <h3 className="mt-4 font-semibold text-2xl text-blue-950">Register an <p> account to start</p></h3>
                        <p className="mt-2 text-gray-500">Quickly create your account to access all features and begin your hiring journey seamlessly.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center dashimg2">
                        <div className="flex justify-center items-center bg-blue-100 rounded-full w-24 h-24">
                            <span className="font-bold text-4xl text-blue-600">2</span>
                        </div>
                        <h3 className="mt-4 font-semibold text-2xl text-blue-950">Explore over <p>thousands of resumes</p></h3>
                        <p className="mt-2 text-gray-500">Browse through thousands of qualified resumes, filtering candidates that perfectly match your job requirements.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center dashimg3">
                        <div className="flex justify-center items-center bg-blue-100 rounded-full w-24 h-24">
                            <span className="font-bold text-4xl text-blue-600">3</span>
                        </div>
                        <h3 className="mt-4 font-semibold text-2xl text-blue-950"><p>Find the most </p> suitable candidate</h3>
                        <p className="mt-2 text-gray-500">Easily identify and select the best candidate for your role, ensuring a perfect fit for your team.</p>
                    </div>
                </div>

                <a
                    className="inline-flex justify-center items-center gap-x-3 bg-blue-600 from-blue-600 hover:from-violet-600 focus:from-violet-600 to-violet-600 hover:to-blue-600 focus:to-blue-600 mt-8 px-4 py-3 border border-transparent rounded-md font-medium text-center text-sm text-white focus:outline-none"
                    href="/register"
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
