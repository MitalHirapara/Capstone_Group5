import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <>

            <header
                key="1"
                className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700"
            >
                <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-x-1">
                        <a
                            aria-label="Brand"
                            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                            href="/"
                        >
                            <img src='./public/logo.png'  alt="Logo" />

                        </a>
                        <button
                            aria-controls="hs-header-base"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-collapse="#hs-header-base"
                            id="hs-header-base-collapse"
                            type="button"
                        >
                            <svg
                                className="hs-collapse-open:hidden size-4"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="3"
                                    x2="21"
                                    y1="6"
                                    y2="6"
                                />
                                <line
                                    x1="3"
                                    x2="21"
                                    y1="12"
                                    y2="12"
                                />
                                <line
                                    x1="3"
                                    x2="21"
                                    y1="18"
                                    y2="18"
                                />
                            </svg>
                            <svg
                                className="hs-collapse-open:block shrink-0 hidden size-4"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <div
                        aria-labelledby="hs-header-base-collapse"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
                        id="hs-header-base"
                    >
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                                <div className="grow">
                                    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1"> 
                                        <a
                                            className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="/"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                />
                                            </svg>
                                            Home
                                        </a>
                                        <a
                                            className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="#"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 12h.01" />
                                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                                <rect
                                                    height="14"
                                                    rx="2"
                                                    width="20"
                                                    x="2"
                                                    y="6"
                                                />
                                            </svg>
                                            Company Reviews
                                        </a>
                                        <a
                                            className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="#"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                                <path d="M18 14h-8" />
                                                <path d="M15 18h-5" />
                                                <path d="M10 6h8v4h-8V6Z" />
                                            </svg>
                                            Build Resume                                        </a>
                                    </div>
                                </div>
                                <div className="my-2 md:my-0 md:mx-2">
                                    <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700" />
                                </div>
                                <div className=" flex flex-wrap items-center gap-x-1.5">
                                    <a
                                        className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        href="/login"
                                    >
                                        Sign in
                                    </a>
                                    <a
                                        className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
                                        href="#"
                                    >
                                        Post a Job
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>

    )
}
