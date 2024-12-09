import React from 'react'
import Badge from "../user/Badge";

const JobDescription = ({ job }) => {

    if (!job) {
        return <div>Loading...</div>; // Handle the case when job data is not yet available
    }
    console.log(job);

    return (
        <>
            <div className="bg-white mt-4 p-6 job-description-page">
                <h2 className="mb-4 font-bold text-2xl text-gray-700">Welcome to {job.employer?.company_name || "our platform"}</h2>
                <p className="mt-6 mb-4 font-normal text-gray-500">{job.description}</p>
                {/* <p className='mt-6 mb-4 font-normal text-gray-500'>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>

                    <h3 className="mb-4 font-bold text-2xl text-gray-700">Essential Knowledge, Skills, and Experience</h3>
                    <ul className="mt-2 ml-6 list-disc">
                        <li className="mt-6 mb-4 font-normal text-gray-500">A portfolio demonstrating well-thought-through and polished end-to-end customer journeys</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">5+ years of industry experience in interactive design and/or visual design</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">Experience in designing for mobile and web</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">Aware of trends inmobile, communications, and collaboration</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">History of impacting shipping products with your work</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">A Bachelor's Degree in Design (or related field) or equivalent professional experience</li>
                        <li className="mt-6 mb-4 font-normal text-gray-500">Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                    </ul>

                    <h3 className="mb-4 font-bold text-2xl text-gray-700">Product Designer</h3>
                    <p className="mt-6 mb-4 font-normal text-gray-500"><strong>Product knowledge:</strong> Deeply understand the technology and features...</p>
                    <p className="mt-6 mb-4 font-normal text-gray-500"><strong>Research:</strong> Provide human and business impact and insights for products.</p>
                    <p className="mt-6 mb-4 font-normal text-gray-500"><strong>Deliverables:</strong> Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
                    <p className="mt-6 mb-4 font-normal text-gray-500"><strong>Communication:</strong> Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p> */}

                <h3 className="mb-4 font-bold text-2xl text-gray-700">Essential Qualifications and Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {job.skill?.length > 0 ? (
                        job.skill.slice(0).map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary">
                                {skill.skill_name}
                            </Badge>
                        ))
                    ) : (
                        <span>No skills listed</span>
                    )}
                </div>

            </div>
            <hr className="border-gray-300 mb-6" />
            <div className='flex'>
                <a

                    className="inline-flex justify-center items-center gap-x-3 bg-blue-600 from-blue-600 hover:from-violet-600 focus:from-violet-600 to-violet-600 hover:to-blue-600 focus:to-blue-600 px-4 py-3 border border-transparent rounded-md font-medium text-center text-sm text-white focus:outline-none"
                    href="#"
                >Apply Now
                </a>
                {/* <button
                        type="button"
                        className="inline-flex relative items-center gap-x-2 border-gray-200 bg-white hover:bg-gray-50 focus:bg-gray-50 disabled:opacity-50 shadow-sm ml-4 pt-2 pr-4 pb-2 pl-4 border rounded-lg font-mono text-gray-800 text-sm disabled:pointer-events-none focus:outline-none group ps-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-gray-500"
                            aria-hidden="true"
                        >
                            <path d="M6 4c-1.1 0-2 .9-2 2v14l8-3.5 8 3.5V6c0-1.1-.9-2-2-2H6zm0 2h12v11.67l-6-2.67-6 2.67V6z" />
                        </svg>
                        Save Job
                    </button> */}
            </div>
        </>
    );
};

export default JobDescription;

