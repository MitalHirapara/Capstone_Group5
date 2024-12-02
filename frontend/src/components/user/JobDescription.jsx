import React from 'react'

const JobDescription = () => {
    return (
        <>
            <div className="bg-white p-6 mt-4 job-description-page">
                <h2 className="text-2xl text-gray-700 font-bold mb-4">Welcome to LinkedIn Team</h2>
                <p className=" text-gray-500 font-normal mb-4 mt-6">The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
                <p className='text-gray-500 font-normal mb-4 mt-6'>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>

                <h3 className="text-2xl text-gray-700 font-bold mb-4">Essential Knowledge, Skills, and Experience</h3>
                <ul className="list-disc ml-6 mt-2">
                    <li className=" text-gray-500 font-normal mb-4 mt-6">A portfolio demonstrating well-thought-through and polished end-to-end customer journeys</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">5+ years of industry experience in interactive design and/or visual design</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">Experience in designing for mobile and web</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">Aware of trends inmobile, communications, and collaboration</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">History of impacting shipping products with your work</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">A Bachelor's Degree in Design (or related field) or equivalent professional experience</li>
                    <li className=" text-gray-500 font-normal mb-4 mt-6">Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                </ul>

                <h3 className="text-2xl text-gray-700 font-bold mb-4">Product Designer</h3>
                <p className=" text-gray-500 font-normal mb-4 mt-6"><strong>Product knowledge:</strong> Deeply understand the technology and features...</p>
                <p className=" text-gray-500 font-normal mb-4 mt-6"><strong>Research:</strong> Provide human and business impact and insights for products.</p>
                <p className=" text-gray-500 font-normal mb-4 mt-6"><strong>Deliverables:</strong> Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
                <p className=" text-gray-500 font-normal mb-4 mt-6"><strong>Communication:</strong> Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p>
            </div>
            <hr className="border-gray-300 mb-6" />
            <div className='flex'>
                <a
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                    href="#"
                >Apply Now
                </a>
                <button
                    type="button"
                    className="relative group ml-4 pt-2 pb-2 pl-4 pr-4 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
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
                </button>
            </div>
        </>
    );
};

export default JobDescription;

