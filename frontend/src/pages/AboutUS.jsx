import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutUS() {
    return (
        <>
            <div className='flex lg:flex-row flex-col items-center mx-auto mt-6 mb-6 sm:px-6 lg:px-8 py-10 lg:py-2 max-w-[85rem] joblisthead'>
                <div className="p-6 lg:w-1/2">
                    <div className="mx-auto mb-10 max-w-2xl guidesec">
                        <div className="mb-5 max-w-2xl">
                            <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                                Empowering Your Career Journey with AI-Driven Resumes and Seamless Job Applications
                            </h3>
                        </div>
                        <hr className='mb-5' />
                        <div className="inline-block bg-clip-text font-medium text-2xl text-gray-950 inspo-text">
                            <FaQuoteLeft className='text-7xl' />
                            <p>Your next career opportunity is just a click away – with the power of AI and a world of job opportunities at your fingertips.</p>
                        </div>

                        <p className="inline-block bg-clip-text font-medium text-gray-500 text-sm">
                            At CareerTrail, we believe that building the perfect resume should be easy and accessible to everyone. Our AI-powered platform helps you create professional, tailored resumes in just a few clicks. Whether you're starting your career or taking the next step, CareerTrail also connects you to a wide range of job opportunities, making the application process simple, quick, and efficient.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center lg:w-1/2">
                    <img src='About us page-pana.png' alt="Resume illustration" className="w-full max-w-sm lg:max-w-md" />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center mx-auto mt-4 mb-6 sm:px-6 lg:px-8 py-10 lg:py-2 max-w-[85rem]'>
                <div className="flex justify-center lg:w-1/2">
                    <img src='Business solution-cuate.png' alt="Resume illustration" className="w-full max-w-sm lg:max-w-md" />
                </div>
                <div className="p-6 lg:w-1/2">
                    <div className="mx-auto mb-10 max-w-2xl guidesec">
                        <div className="mb-5 max-w-2xl">
                            <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                                From an Idea to Empowering Careers
                            </h3>
                        </div>
                        <hr className='mb-5' />

                        <p className="inline-block bg-clip-text mb-5 font-medium text-gray-500 text-sm">
                            CareerTrail began with a simple idea: to make the job search and resume-building process more accessible, intuitive, and effective for everyone. It all started when our founder, having faced the frustrations of creating a resume that truly stood out in a competitive job market, realized the potential of combining artificial intelligence with job application tools. The goal was clear: simplify the career journey, from crafting the perfect resume to applying for the ideal job.
                        </p>
                        <p className="inline-block bg-clip-text mb-5 font-medium text-gray-500 text-sm">
                            We gathered a team of tech enthusiasts, designers, and career development experts to turn this idea into reality. With AI at the core, we developed a platform that allows users to build highly customizable, professional resumes based on their experience, skills, and the job they want. But we didn’t stop there. We wanted to ensure that users not only had a stellar resume but also a place to apply for jobs directly.
                        </p>
                        <p className="inline-block bg-clip-text font-medium text-gray-500 text-sm">
                            After months of hard work, feedback, and fine-tuning, CareerTrail was born. It’s now a one-stop platform where individuals can create a professional resume in minutes and directly connect with job opportunities. We’re proud to be a part of every job seeker’s journey, providing them with the tools they need to succeed and build a bright future.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="bg-zinc-50 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-[85rem]">
                {/* Title */}
                <div className="mx-auto mb-10 lg:mb-14 max-w-2xl text-center">

                    <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                        Meet Our Team
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        Creative people
                    </p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 md:p-6 border rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <div class="mx-auto mb-4 w-24 h-24">
                                <img src="Foram.jpeg" alt="Team Member 2" class="rounded-full w-full h-full object-cover" />
                            </div>
                            <div className="grow">
                                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                                    Foram Chhaya
                                </h3>
                                <p className="text-gray-500 text-xs dark:text-neutral-500 uppercase">
                                    Full Stack Developer (Database & API Focus)
                                </p>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-500 dark:text-neutral-500">
                            As a Full Stack Developer with a strong focus on PostgreSQL database management and API development, Foram is responsible for designing and maintaining the database schema, optimizing queries, and ensuring data integrity.
                        </p>
                        {/* Social Brands */}
                        <div className="space-x-1 mt-3">
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                </svg>
                            </a>
                        </div>
                        {/* End Social Brands */}
                    </div>
                    {/* End Col */}
                    <div className="flex flex-col border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 md:p-6 border rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <div class="mx-auto mb-4 w-24 h-24">
                                <img src="Mital.jpeg" alt="Team Member 2" class="rounded-full w-full h-full object-cover" />
                            </div>
                            <div className="grow">
                                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                                    Mital Hirapara
                                </h3>
                                <p className="text-gray-500 text-xs dark:text-neutral-500 uppercase">
                                    Frontend Developer (UI/UX Focus)
                                </p>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-500 dark:text-neutral-500">
                            Mital is the Frontend Developer, specializing in the user interface and user experience. Using ReactJS and Tailwind CSS, Mital designs and implements interactive, responsive, and visually appealing frontend components.
                        </p>
                        {/* Social Brands */}
                        <div className="space-x-1 mt-3">
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                </svg>
                            </a>
                        </div>
                        {/* End Social Brands */}
                    </div>
                    {/* End Col */}
                    <div className="flex flex-col border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 md:p-6 border rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <div class="mx-auto mb-4 w-24 h-24">
                                <img src="Doly.jpeg" alt="Team Member 2" class="rounded-full w-full h-full object-cover" />
                            </div>
                            <div className="grow">
                                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                                    Doly Patel
                                </h3>
                                <p className="text-gray-500 text-xs dark:text-neutral-500 uppercase">
                                    Backend Developer (Backend Focus)
                                </p>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-500 dark:text-neutral-500">
                            As a Backend Developer with a focus on database management and API development, Doly is responsible for designing and maintaining the server-side infrastructure using Python Django.
                        </p>
                        {/* Social Brands */}
                        <div className="space-x-1 mt-3">
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-semibold text-gray-500 text-sm dark:text-neutral-400 disabled:pointer-events-none focus:outline-none size-8"
                                href="#"
                            >
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                </svg>
                            </a>
                        </div>
                        {/* End Social Brands */}
                    </div>
                </div>
                {/* End Grid */}
            </div>
            {/* End Team */}


            {/* Card Blog */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-[85rem]">
                {/* Title */}
                <div className="mx-auto mb-10 lg:mb-14 max-w-2xl text-center">
                    <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                        News and Blogs
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        Get the latest news, updates and tips from our blog posts.
                    </p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    <a
                        className="flex flex-col border-gray-200 dark:border-neutral-700 hover:shadow-lg focus:shadow-lg dark:hover:shadow-black/40 dark:focus:shadow-black/40 p-5 border hover:border-transparent dark:hover:border-transparent focus:border-transparent dark:focus:border-transparent rounded-xl h-full transition duration-300 focus:outline-none group"
                        href="#"
                    >
                        <div className="aspect-w-16 aspect-h-11">
                            <img
                                className="rounded-xl w-full object-cover"
                                src="blog1.jpg"
                                alt="Blog Image"
                            />
                        </div>
                        <div className="my-6">
                            <h3 className="dark:group-hover:text-white font-semibold text-gray-800 text-xl dark:text-neutral-300">
                                21 Job Interview Tips: How To Make a Great Impression
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.
                            </p>
                        </div>
                        <div className="flex items-center gap-x-3 mt-auto">
                            <img
                                className="rounded-full size-8"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-gray-800 text-sm dark:text-neutral-200">
                                    By Lauren Waller
                                </h5>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="flex flex-col border-gray-200 dark:border-neutral-700 hover:shadow-lg focus:shadow-lg dark:hover:shadow-black/40 dark:focus:shadow-black/40 p-5 border hover:border-transparent dark:hover:border-transparent focus:border-transparent dark:focus:border-transparent rounded-xl h-full transition duration-300 focus:outline-none group"
                        href="#"
                    >
                        <div className="aspect-w-16 aspect-h-11">
                            <img
                                className="rounded-xl w-full object-cover"
                                src="blog2.jpg"
                                alt="Blog Image"
                            />
                        </div>
                        <div className="my-6">
                            <h3 className="dark:group-hover:text-white font-semibold text-gray-800 text-xl dark:text-neutral-300">
                                How To Write a Cover Letter (Plus Tips and Examples)
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.
                            </p>
                        </div>
                        <div className="flex items-center gap-x-3 mt-auto">
                            <img
                                className="rounded-full size-8"
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-gray-800 text-sm dark:text-neutral-200">
                                    By Aaron Larsson
                                </h5>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                    {/* Card */}
                    <a
                        className="flex flex-col border-gray-200 dark:border-neutral-700 hover:shadow-lg focus:shadow-lg dark:hover:shadow-black/40 dark:focus:shadow-black/40 p-5 border hover:border-transparent dark:hover:border-transparent focus:border-transparent dark:focus:border-transparent rounded-xl h-full transition duration-300 focus:outline-none group"
                        href="#"
                    >
                        <div className="aspect-w-16 aspect-h-11">
                            <img
                                className="rounded-xl w-full object-cover"
                                src="blog3.jpg"
                                alt="Blog Image"
                            />
                        </div>
                        <div className="my-6">
                            <h3 className="dark:group-hover:text-white font-semibold text-gray-800 text-xl dark:text-neutral-300">
                                39 Strengths and Weaknesses To Discuss in a Job Interview
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.
                            </p>
                        </div>
                        <div className="flex items-center gap-x-3 mt-auto">
                            <img
                                className="rounded-full size-8"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-gray-800 text-sm dark:text-neutral-200">
                                    By Lauren Waller
                                </h5>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Grid */}
                {/* Card */}
                <div className="mt-12 text-center">
                    <a
                        className="inline-flex items-center gap-x-1 border-gray-200 dark:border-neutral-700 bg-white hover:bg-gray-50 dark:hover:bg-neutral-800 focus:bg-gray-50 dark:focus:bg-neutral-800 dark:bg-neutral-900 disabled:opacity-50 shadow-sm px-4 py-3 border rounded-full font-medium text-blue-600 text-sm dark:text-blue-500 disabled:pointer-events-none focus:outline-none"
                        href="#"
                    >
                        Read more
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
                {/* End Card */}
            </div>
            {/* End Card Blog */}


        </>
    )
}
