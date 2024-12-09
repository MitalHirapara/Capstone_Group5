import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    // State to manage the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header
                key="1"
                className="z-50 flex flex-wrap md:flex-nowrap md:justify-start border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 border-b w-full"
            >
                <nav className="relative md:flex md:justify-between md:items-center md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2 w-full max-w-[85rem]">
                    <div className="flex justify-between items-center gap-x-1">
                        <a
                            aria-label="Brand"
                            className="flex-none focus:opacity-80 font-semibold text-black text-xl dark:text-white focus:outline-none"
                            href="/"
                        >
                            <img src="./public/logo.png" alt="Logo" />
                        </a>
                        <button
                            aria-controls="hs-header-base"
                            aria-expanded={isMenuOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                            className="relative flex justify-center items-center border-gray-200 dark:border-neutral-700 md:hidden hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 border rounded-lg font-medium text-[12px] text-gray-800 dark:text-white disabled:pointer-events-none focus:outline-none hs-collapse-toggle size-9"
                            onClick={toggleMenu}
                            type="button"
                        >
                            <svg
                                className={`hs-collapse-open:hidden size-4 ${isMenuOpen ? "hidden" : "block"}`}
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
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg
                                className={`hs-collapse-open:block shrink-0 ${isMenuOpen ? "block" : "hidden"}`}
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
                        className={`hs-collapse transition-all duration-300 basis-full grow md:block ${isMenuOpen ? "block" : "hidden"}`}
                        id="hs-header-base"
                    >
                        <div className="[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:w-2 max-h-[75vh] overflow-hidden overflow-y-auto">
                            <div className="flex md:flex-row flex-col md:items-center gap-0.5 md:gap-1 py-2 md:py-0">
                                <div className="grow">
                                    <div className="flex md:flex-row flex-col md:justify-end md:items-center gap-0.5 md:gap-1">
                                        <Link
                                            className="flex items-center hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 p-2 rounded-lg text-gray-800 text-sm dark:text-neutral-200 focus:outline-none"
                                            to="/"
                                        >
                                            <svg
                                                className="block md:hidden md:me-2 me-3 shrink-0 size-4"
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
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            Home
                                        </Link>
                                        <Link
                                            className="flex items-center hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 p-2 rounded-lg text-gray-800 text-sm dark:text-neutral-200 focus:outline-none"
                                            to="/jobs"
                                        >
                                            <svg
                                                className="block md:hidden md:me-2 me-3 shrink-0 size-4"
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
                                            Jobs
                                        </Link>
                                        <Link
                                            className="flex items-center hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 p-2 rounded-lg text-gray-800 text-sm dark:text-neutral-200 focus:outline-none"
                                            to="/resume-builder"
                                        >
                                            <svg
                                                className="block md:hidden md:me-2 me-3 shrink-0 size-4"
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
                                            Build Resume{" "}
                                        </Link>
                                        <Link
                                            className="flex items-center hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 p-2 rounded-lg text-gray-800 text-sm dark:text-neutral-200 focus:outline-none"
                                            to="/about-us"
                                        >
                                            <svg
                                                className="block md:hidden md:me-2 me-3 shrink-0 size-4"
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
                                            About Us
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:mx-2 my-2 md:my-0">
                                    <div className="bg-gray-100 md:bg-gray-300 dark:bg-neutral-700 w-full md:w-px h-px md:h-4" />
                                </div>
                                <div className="flex flex-wrap items-center gap-x-1.5">
                                    <a
                                        className="inline-flex items-center border-gray-200 dark:border-neutral-700 bg-white hover:bg-gray-50 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 dark:bg-neutral-800 disabled:opacity-50 shadow-sm px-2.5 py-[7px] border rounded-lg font-medium text-gray-800 text-sm dark:text-neutral-300 disabled:pointer-events-none focus:outline-none"
                                        href="/login"
                                    >
                                        Sign in
                                    </a>
                                    <a
                                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-600 focus:bg-blue-700 dark:focus:bg-blue-600 dark:bg-blue-500 disabled:opacity-50 px-2.5 py-2 rounded-lg font-medium text-sm text-white disabled:pointer-events-none focus:outline-none"
                                        href="/employer-signup"
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
    );
}
