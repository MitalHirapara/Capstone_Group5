import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            {/* Sidebar */}
            <div
                id="hs-application-sidebar"
                className="hs-overlay  [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform
                    w-[260px] h-full
                    hidden bg-slate-950
                    fixed inset-y-0 start-0 z-[60]
                    bg-white  border-gray-200
                    lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
                role="dialog"
                tabIndex={-1}
                aria-label="Sidebar"
            >
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-4">
                        <a
                            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                            href="#"
                            aria-label="Preline"
                        >
                            <img
                                src="./public/footer_white_logo.png"
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <nav
                            className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
                            data-hs-accordion-always-open=""
                        >
                            <ul className="flex flex-col space-y-1">
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-200 rounded-lg hover:bg-slate-300 hover:text-slate-950 focus:outline-none focus:bg-slate-300 focus:text-slate-950"
                                    >
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
                                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                        Dashboard
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/create-job-post"
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-200 rounded-lg hover:bg-slate-300 hover:text-slate-950 focus:outline-none focus:bg-slate-300 focus:text-slate-950"
                                    >
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
                                            <rect
                                                width={20}
                                                height={14}
                                                x={2}
                                                y={7}
                                                rx={2}
                                                ry={2}
                                            />
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                        </svg>
                                        Create Job Post
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/manage-jobs"
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-200 rounded-lg hover:bg-slate-300 hover:text-slate-950 focus:outline-none focus:bg-slate-300 focus:text-slate-950"
                                    >
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
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                        </svg>
                                        Manage Job Posts
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/manage-jobs"
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-200 rounded-lg hover:bg-slate-300 hover:text-slate-950 focus:outline-none focus:bg-slate-300 focus:text-slate-950"
                                    >
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
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                        View Applicants
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* End Sidebar */}
        </>
    );
}
