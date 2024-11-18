import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For jobId

const ApplyJobPage = () => {
    const { jobId } = useParams(); // Get the jobId from the URL
    const [currentStep, setCurrentStep] = useState(1);
    const [resume, setResume] = useState(null);
    const [answers, setAnswers] = useState({
        fortranExp: "",
        unixExp: "",
        devopsExp: "",
        interviewTimes: "",
        commuteRelocate: "",
    });
    const [coverLetter, setCoverLetter] = useState("");
    const [jobDescription, setJobDescription] = useState(""); // Job description state
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Dummy data for Frontend Developer role
        const dummyJobDescription = `
      <h3 class="text-xl font-semibold mb-4">Frontend Developer</h3>
      <p><strong>Location:</strong> Toronto, ON (Hybrid)</p>
      <p><strong>Company:</strong> Example Tech Solutions</p>
      <p><strong>Salary:</strong> $80,000 - $100,000 per year</p>
      <p><strong>Job Type:</strong> Full-time</p>
      <h4 class="mt-4 font-semibold">Job Overview:</h4>
      <p>
        We are looking for a talented Frontend Developer to join our team at Example Tech Solutions. As a Frontend Developer,
        you will work on creating user-friendly, visually appealing websites and applications. The ideal candidate should have a
        strong understanding of HTML, CSS, JavaScript, and modern frontend frameworks such as React.js or Vue.js.
      </p>
      <h4 class="mt-4 font-semibold">Responsibilities:</h4>
      <ul class="list-disc pl-6">
        <li>Develop and maintain user interfaces for web applications</li>
        <li>Collaborate with backend developers to integrate APIs and services</li>
        <li>Write clean, efficient, and reusable code</li>
        <li>Participate in code reviews and contribute to team knowledge sharing</li>
        <li>Ensure the technical feasibility of UI/UX designs</li>
      </ul>
      <h4 class="mt-4 font-semibold">Required Skills:</h4>
      <ul class="list-disc pl-6">
        <li>Proficiency in HTML, CSS, and JavaScript</li>
        <li>Experience with React.js or similar frontend frameworks</li>
        <li>Understanding of responsive design principles</li>
        <li>Experience with version control systems like Git</li>
        <li>Strong problem-solving skills and attention to detail</li>
      </ul>
      <h4 class="mt-4 font-semibold">Preferred Skills:</h4>
      <ul class="list-disc pl-6">
        <li>Familiarity with state management libraries (e.g., Redux)</li>
        <li>Experience with CSS preprocessors (e.g., Sass, Less)</li>
        <li>Experience working in an Agile environment</li>
      </ul>
      <p class="mt-4">If you're passionate about frontend development and eager to work in a dynamic and collaborative environment, we'd love to hear from you!</p>
    `;

        // Set dummy job description
        setJobDescription(dummyJobDescription);
    }, [jobId]);

    const handleNextStep = () => setCurrentStep((prev) => prev + 1);
    const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const progressPercent = (currentStep / 5) * 100; // 5 steps in total

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
                {/* Custom progress bar using Tailwind CSS */}
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                            Step {currentStep} of 5
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                            {Math.round(progressPercent)}% Completed
                        </span>
                    </div>
                    <div className="flex mb-2 items-center justify-between">
                        <div className="relative pt-1 w-full">
                            <div className="flex mb-2 items-center justify-between">
                                <div className="h-2 mb-2 w-full bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 rounded-full bg-blue-500"
                                        style={{ width: `${progressPercent}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-950">
                {/* Left Column: Application Steps */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-semibold mb-4">
                        Apply for this Job
                    </h2>

                    {currentStep === 1 && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Step 1: Upload Resume
                            </h3>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => setResume(e.target.files[0])}
                                className="block w-full border-2 border-gray-300 p-3 rounded-md"
                            />
                            <div className="mt-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Step 2: Answer Employer Questions
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">
                                        How many years of Fortran experience do
                                        you have?
                                    </label>
                                    <input
                                        type="number"
                                        name="fortranExp"
                                        value={answers.fortranExp}
                                        onChange={handleInputChange}
                                        className="block w-full border-2 border-gray-300 p-3 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">
                                        How many years of UNIX experience do you
                                        have?
                                    </label>
                                    <input
                                        type="number"
                                        name="unixExp"
                                        value={answers.unixExp}
                                        onChange={handleInputChange}
                                        className="block w-full border-2 border-gray-300 p-3 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">
                                        How many years of DevOps experience do
                                        you have?
                                    </label>
                                    <input
                                        type="number"
                                        name="devopsExp"
                                        value={answers.devopsExp}
                                        onChange={handleInputChange}
                                        className="block w-full border-2 border-gray-300 p-3 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">
                                        Please list 2-3 dates and time ranges
                                        for interviews (optional):
                                    </label>
                                    <textarea
                                        name="interviewTimes"
                                        value={answers.interviewTimes}
                                        onChange={handleInputChange}
                                        className="block w-full border-2 border-gray-300 p-3 rounded-md"
                                        rows="3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">
                                        Will you be able to reliably commute or
                                        relocate to Toronto, ON for this job?
                                    </label>
                                    <select
                                        name="commuteRelocate"
                                        value={answers.commuteRelocate}
                                        onChange={handleInputChange}
                                        className="block w-full border-2 border-gray-300 p-3 rounded-md"
                                    >
                                        <option value="">
                                            Select an option
                                        </option>
                                        <option value="Yes, I can make the commute">
                                            Yes, I can make the commute
                                        </option>
                                        <option value="Yes, I am planning to relocate">
                                            Yes, I am planning to relocate
                                        </option>
                                        <option value="Yes, but I need relocation assistance">
                                            Yes, but I need relocation
                                            assistance
                                        </option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handlePrevStep}
                                    className="bg-gray-300 text-black px-4 py-2 rounded-md"
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Step 3: Cover Letter
                            </h3>
                            <textarea
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                placeholder="Write a cover letter"
                                className="block w-full border-2 border-gray-300 p-3 rounded-md"
                                rows="5"
                            />
                            <div className="mt-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handlePrevStep}
                                    className="bg-gray-300 text-black px-4 py-2 rounded-md"
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Step 4: Review Application
                            </h3>
                            <div className="space-y-4">
                                <p>
                                    <strong>Resume:</strong>{" "}
                                    {resume?.name || "No resume uploaded"}
                                </p>
                                <p>
                                    <strong>Fortran Experience:</strong>{" "}
                                    {answers.fortranExp} years
                                </p>
                                <p>
                                    <strong>UNIX Experience:</strong>{" "}
                                    {answers.unixExp} years
                                </p>
                                <p>
                                    <strong>DevOps Experience:</strong>{" "}
                                    {answers.devopsExp} years
                                </p>
                                <p>
                                    <strong>Interview Times:</strong>{" "}
                                    {answers.interviewTimes || "Not provided"}
                                </p>
                                <p>
                                    <strong>Commute/Relocate:</strong>{" "}
                                    {answers.commuteRelocate}
                                </p>
                                <p>
                                    <strong>Cover Letter:</strong> {coverLetter}
                                </p>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handlePrevStep}
                                    className="bg-gray-300 text-black px-4 py-2 rounded-md"
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </div>
                    )}

                    {isSubmitted && (
                        <div className="mt-8 text-center text-xl font-semibold text-green-500">
                            Application Submitted Successfully!
                        </div>
                    )}
                </div>

                {/* Right Column: Job Description */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-semibold mb-4">
                        Job Description
                    </h2>
                    <div className="bg-white border-2 border-gray-300 p-6 rounded-md text-slate-950">
                        <div
                            dangerouslySetInnerHTML={{ __html: jobDescription }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJobPage;
