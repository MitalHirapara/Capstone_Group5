import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For jobId
import axios from "axios"; // For API calls

const ApplyJobPage = () => {
    const { jobId } = useParams(); // Get the jobId from the URL
    const [currentStep, setCurrentStep] = useState(1);
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState("");
    const [answers, setAnswers] = useState({
        fortranExp: "",
        unixExp: "",
        devopsExp: "",
        interviewTimes: "",
        commuteRelocate: "",
    });
    const [jobDescription, setJobDescription] = useState(""); // Job description state
    const [isSubmitted, setIsSubmitted] = useState(false);

    const API_BASE_URL = "http://127.0.0.1:8000/api";

    useEffect(() => {
        // Fetch job description dynamically if API is available
        const fetchJobDescription = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/jobs/${jobId}/`
                );
                setJobDescription(response.data.description); // Update with actual API response
            } catch (error) {
                console.error("Error fetching job description:", error);
                setJobDescription(
                    `<p>Error loading job description. Please try again later.</p>`
                );
            }
        };

        fetchJobDescription();
    }, [jobId]);

    const handleNextStep = () => setCurrentStep((prev) => prev + 1);
    const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Step 1: Upload resume and cover letter with the job application
            const formData = new FormData();
            formData.append("job_id", jobId);
            formData.append("resume", resume);
            formData.append("cover_letter", coverLetter);

            const applicationResponse = await axios.post(
                `${API_BASE_URL}/apply/`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            const jobApplicationId = applicationResponse.data.id; // Assuming the backend returns the application ID

            // Step 2: Submit answers to questions
            const answersPayload = [
                {
                    question_id: 1, // Replace with the actual question IDs from the backend
                    job_application_id: jobApplicationId,
                    answer_text: answers.fortranExp,
                },
                {
                    question_id: 2,
                    job_application_id: jobApplicationId,
                    answer_text: answers.unixExp,
                },
                {
                    question_id: 3,
                    job_application_id: jobApplicationId,
                    answer_text: answers.devopsExp,
                },
                {
                    question_id: 4,
                    job_application_id: jobApplicationId,
                    answer_text: answers.interviewTimes,
                },
                {
                    question_id: 5,
                    job_application_id: jobApplicationId,
                    answer_text: answers.commuteRelocate,
                },
            ];

            await axios.post(`${API_BASE_URL}/answers/`, answersPayload);

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("Failed to submit application. Please try again.");
        }
    };

    const progressPercent = (currentStep / 4) * 100; // Adjusted for 4 steps

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                            Step {currentStep} of 4
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                            {Math.round(progressPercent)}% Completed
                        </span>
                    </div>
                    <div className="h-2 mb-2 w-full bg-gray-200 rounded-full">
                        <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-950">
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
                                {/* Add inputs for each question */}
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
                                {/* Repeat similar inputs for other questions */}
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
                                Step 4: Review and Submit
                            </h3>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                            >
                                Submit Application
                            </button>
                        </div>
                    )}

                    {isSubmitted && (
                        <div className="mt-8 text-center text-xl font-semibold text-green-500">
                            Application Submitted Successfully!
                        </div>
                    )}
                </div>

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
