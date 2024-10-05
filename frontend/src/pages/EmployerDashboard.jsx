import React, { useEffect, useState } from "react";

const EmployerDashboard = () => {
    const [totalJobs, setTotalJobs] = useState(0);

    useEffect(() => {
        const fetchTotalJobs = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/job/jobs/");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setTotalJobs(data.length);
            } catch (error) {
                console.error("Error fetching total jobs:", error);
            }
        };

        fetchTotalJobs();
    }, []);

    return (
        <div className="flex h-screen">
            <main className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Chart 1 */}
                    <div className="p-4 md:p-5 min-h-[510px] flex flex-col bg-white border bg-white p-8 shadow-lg shadow-slate-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                                    Applicants
                                </h2>
                                <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                    1.1 K
                                </p>
                            </div>
                            <div>
                                <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
                                    <svg
                                        className="inline-block size-3.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                    </svg>
                                    25%
                                </span>
                            </div>
                        </div>
                        <div id="hs-multiple-bar-charts"></div>
                    </div>
                    {/* Chart 2 */}
                    <div className="p-4 md:p-5 min-h-[510px] flex flex-col bg-white border bg-white p-8 shadow-lg shadow-slate-200 dark:bg-neutral-800 dark:border-neutral-700">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                                    Visitors
                                </h2>
                                <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                    80.3k
                                </p>
                            </div>
                            <div>
                                <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
                                    <svg
                                        className="inline-block size-3.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                    </svg>
                                    2%
                                </span>
                            </div>
                        </div>
                        <div id="hs-single-area-chart"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-4 bg-white border shadow-lg shadow-slate-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                        <h2 className="text-lg mb-3 font-medium text-slate-800 dark:text-neutral-200">
                            Total Jobs
                        </h2>
                        <p className="text-2xl font-bold text-slate-600 dark:text-neutral-100">
                            {totalJobs}
                        </p>
                    </div>

                    <div className="p-4 bg-white border shadow-lg shadow-slate-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                        <h2 className="text-lg mb-3 font-medium text-slate-800 dark:text-neutral-200">
                            Total Applicants
                        </h2>
                        <p className="text-2xl font-bold text-slate-600 dark:text-neutral-100">
                            120
                        </p>
                    </div>

                    <div className="p-4 bg-white border shadow-lg shadow-slate-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                        <h2 className="text-lg mb-3 font-medium text-slate-800 dark:text-neutral-200">
                            Rejected Applicants
                        </h2>
                        <p className="text-2xl font-bold text-slate-600 dark:text-neutral-100">
                            15
                        </p>
                    </div>

                    <div className="p-4 bg-white border shadow-lg shadow-slate-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                        <h2 className="text-lg mb-3 font-medium text-slate-800 dark:text-neutral-200">
                            Jobs Closed
                        </h2>
                        <p className="text-2xl font-bold text-slate-600 dark:text-neutral-100">
                            30
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EmployerDashboard;
