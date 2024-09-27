import React from 'react'

export default function Faqs() {
    return (
        <>
            <>
                {/* Features */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="relative p-6 md:p-16">
                        {/* Grid */}
                        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
                            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-7 lg:order-2">
                                <>
                                    {/* Accordion */}
                                    <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                                        <div
                                            className="hs-accordion pb-3 active"
                                            id="hs-basic-with-title-and-arrow-stretched-heading-one"
                                        >
                                            <button
                                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                                aria-expanded="true"
                                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                            >
                                                What is CareerTrail?
                                                <svg
                                                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                            </button>
                                            <div
                                                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                                role="region"
                                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                                            >
                                                <p className="text-gray-600 dark:text-neutral-400">
                                                    CareerTrail is an online platform that helps users create AI-generated resumes tailored to their career goals. Additionally, it acts as a job portal where users can browse and apply for relevant job opportunities.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="hs-accordion pt-6 pb-3"
                                            id="hs-basic-with-title-and-arrow-stretched-heading-two"
                                        >
                                            <button
                                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                                aria-expanded="false"
                                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                            >
                                                Can I apply to jobs directly through CareerTrail?
                                                <svg
                                                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                            </button>
                                            <div
                                                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                                role="region"
                                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                                            >
                                                <p className="text-gray-600 dark:text-neutral-400">
                                                    Yes! CareerTrail not only helps you build a resume but also allows you to browse job listings and apply directly to jobs using your AI-generated resume.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="hs-accordion pt-6 pb-3"
                                            id="hs-basic-with-title-and-arrow-stretched-heading-three"
                                        >
                                            <button
                                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                                aria-expanded="false"
                                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                            >
                                                Is CareerTrail free to use?
                                                <svg
                                                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                            </button>
                                            <div
                                                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                                role="region"
                                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                                            >
                                                <p className="text-gray-600 dark:text-neutral-400">
                                                    CareerTrail offers a free version with basic features for resume building and job searches. We also provide premium plans that unlock additional features such as advanced resume templates, cover letter creation, and priority job matching.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="hs-accordion pt-6 pb-3"
                                            id="hs-basic-with-title-and-arrow-stretched-heading-four"
                                        >
                                            <button
                                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                                aria-expanded="false"
                                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                            >
                                                How secure is my personal information?
                                                <svg
                                                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                            </button>
                                            <div
                                                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                                role="region"
                                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                                            >
                                                <p className="text-gray-600 dark:text-neutral-400">
                                                    Your privacy is our top priority. CareerTrail uses industry-standard encryption to protect your data. We do not share your personal information with third parties without your consent.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="hs-accordion pt-6 pb-3"
                                            id="hs-basic-with-title-and-arrow-stretched-heading-five"
                                        >
                                            <button
                                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                                aria-expanded="false"
                                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                            >
                                                How can I improve my chances of getting hired using CareerTrail?
                                                <svg
                                                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                            </button>
                                            <div
                                                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                                role="region"
                                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                                            >
                                                <p className="text-gray-600 dark:text-neutral-400">
                                                    To improve your chances, make sure your profile is complete and up-to-date with accurate information about your skills, experience, and education. Customize your AI-generated resume for each job application by tailoring the content to the job description. Take advantage of the platform’s recommendations for resume improvement, and apply to jobs that match your qualifications closely. Consistently updating your profile and applying for relevant jobs increases your visibility to recruiters.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="hs-accordion pt-6 pb-3"
                                            id="hs-basic-with-title-and-arrow-stretched-heading-six"
                                        >
                                            <button
                                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                                aria-expanded="false"
                                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                            >
                                                What should I do if I’m not getting responses from employers?
                                                <svg
                                                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                            </button>
                                            <div
                                                id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                                role="region"
                                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                                            >
                                                <p className="text-gray-600 dark:text-neutral-400">
                                                    If you’re not getting responses, first review your resume to ensure it highlights your most relevant skills and experience. You can use CareerTrail’s AI suggestions to make your resume more competitive. Additionally, consider applying to jobs that closely match your experience level and skills. You can also reach out to CareerTrail’s support team for personalized assistance on improving your job search strategy, including optimizing your resume and cover letter.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </div>
                            {/* End Col */}
                            <div className="lg:col-span-6">
                                <div className="relative">
                                    {/* Tab Content */}
                                    <div>
                                        <div
                                            id="tabs-with-card-1"
                                            role="tabpanel"
                                            aria-labelledby="tabs-with-card-item-1"
                                        >
                                            <img
                                                className="shadow-xl shadow-gray-200 rounded-xl"
                                                src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                                                alt="Features Image"
                                            />
                                        </div>
                                        <div
                                            id="tabs-with-card-2"
                                            className="hidden"
                                            role="tabpanel"
                                            aria-labelledby="tabs-with-card-item-2"
                                        >
                                            <img
                                                className="shadow-xl shadow-gray-200 rounded-xl"
                                                src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                                                alt="Features Image"
                                            />
                                        </div>
                                        <div
                                            id="tabs-with-card-3"
                                            className="hidden"
                                            role="tabpanel"
                                            aria-labelledby="tabs-with-card-item-3"
                                        >
                                            <img
                                                className="shadow-xl shadow-gray-200 rounded-xl"
                                                src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                                                alt="Features Image"
                                            />
                                        </div>
                                    </div>
                                    {/* End Tab Content */}
                                    {/* SVG Element */}
                                    <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                                        <svg
                                            className="w-16 h-auto text-orange-500"
                                            width={121}
                                            height={135}
                                            viewBox="0 0 121 135"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                                stroke="currentColor"
                                                strokeWidth={10}
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                                stroke="currentColor"
                                                strokeWidth={10}
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                                stroke="currentColor"
                                                strokeWidth={10}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    {/* End SVG Element */}
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}
                        {/* Background Color */}
                        <div className="absolute inset-0 grid grid-cols-12 size-full">
                            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
                        </div>
                        {/* End Background Color */}
                    </div>
                </div>
                {/* End Features */}
            </>

        </>
    )
}
