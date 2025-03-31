import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const EmployerDashboard = () => {
    const [totalJobs, setTotalJobs] = useState(0);
    const [applicantsData, setApplicantsData] = useState([]);
    const [viewsData, setViewsData] = useState([]);

    useEffect(() => {
        const fetchTotalJobs = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/jobs/");
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

        const applicantsDataPath = "/src/assets/json/applicants_data.json";
        const viewsDataPath = "/src/assets/json/views_data.json";

        // Fetching Applicants data
        fetch(applicantsDataPath)
            .then((response) => response.json())
            .then((data) => setApplicantsData(data))
            .catch((error) =>
                console.error("Error fetching applicants data:", error)
            );

        // Fetching Views data
        fetch(viewsDataPath)
            .then((response) => response.json())
            .then((data) => setViewsData(data))
            .catch((error) =>
                console.error("Error fetching views data:", error)
            );
    }, []);

    useEffect(() => {
        // Create bar chart for applicants
        if (applicantsData.length > 0) {
            const margin = { top: 50, right: 30, bottom: 40, left: 40 },
                width = 500,
                height = 300;

            const svg = d3
                .select("#applicants-chart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`)
                .style("background-color", "#f0f8ff"); // Light blue background

            const x = d3
                .scaleBand()
                .domain(applicantsData.map((d) => d.date))
                .range([0, width])
                .padding(0.1);

            const y = d3
                .scaleLinear()
                .domain([0, d3.max(applicantsData, (d) => d.value)])
                .nice()
                .range([height, 0]);

            svg.append("g")
                .selectAll(".bar")
                .data(applicantsData)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d) => x(d.date))
                .attr("y", (d) => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", (d) => height - y(d.value))
                .attr("fill", "#4682b4"); // Light blue fill color

            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .selectAll("text")
                .style("text-anchor", "middle"); // Centering x-axis labels

            svg.append("g")
                .call(d3.axisLeft(y))
                .selectAll("text")
                .style("text-anchor", "end"); // Aligning y-axis labels
        }

        // Create line chart for views
        if (viewsData.length > 0) {
            const margin = { top: 50, right: 30, bottom: 40, left: 40 },
                width = 500,
                height = 300;

            const svg = d3
                .select("#views-chart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`)
                .style("background-color", "#f0f8ff"); // Light blue background

            const x = d3
                .scaleTime()
                .domain(d3.extent(viewsData, (d) => new Date(d.date)))
                .range([0, width]);

            const y = d3
                .scaleLinear()
                .domain([0, d3.max(viewsData, (d) => d.value)])
                .nice()
                .range([height, 0]);

            const line = d3
                .line()
                .x((d) => x(new Date(d.date)))
                .y((d) => y(d.value))
                .curve(d3.curveMonotoneX); // Smooth curve

            svg.append("path")
                .datum(viewsData)
                .attr("fill", "none")
                .attr("stroke", "#4682b4") // Light blue line color
                .attr("stroke-width", 3) // Thicker line
                .attr("d", line);

            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .selectAll("text")
                .style("text-anchor", "middle"); // Centering x-axis labels

            svg.append("g")
                .call(d3.axisLeft(y))
                .selectAll("text")
                .style("text-anchor", "end"); // Aligning y-axis labels

            // Tooltip for line chart
            const tooltip = d3
                .select("#views-chart")
                .append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            svg.selectAll(".bar")
                .data(viewsData)
                .enter()
                .append("circle")
                .attr("class", "tooltip")
                .attr("cx", (d) => x(new Date(d.date)))
                .attr("cy", (d) => y(d.value))
                .attr("r", 4)
                .attr("fill", "#4682b4")
                .on("mouseover", (event, d) => {
                    tooltip.transition().duration(200).style("opacity", 0.9);
                    tooltip
                        .html(`Date: ${d.date}<br>Views: ${d.value}`)
                        .style("left", `${event.pageX + 5}px`)
                        .style("top", `${event.pageY - 28}px`);
                })
                .on("mouseout", () => {
                    tooltip.transition().duration(500).style("opacity", 0);
                });
        }
    }, [applicantsData, viewsData]);

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
                        <div
                            id="applicants-chart"
                            className="text-slate-950"
                        ></div>
                    </div>
                    {/* Chart 2 */}
                    <div className="p-4 md:p-5 min-h-[510px] flex flex-col bg-white border bg-white p-8 shadow-lg shadow-slate-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                                    Job Views
                                </h2>
                                <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                    80.5 K
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
                                    18%
                                </span>
                            </div>
                        </div>
                        <div id="views-chart" className="text-slate-950"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
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
