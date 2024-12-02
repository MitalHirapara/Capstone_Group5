import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyJobPage = () => {
    const jobId = 3; // Hardcoded job ID for now; replace with dynamic ID if necessary
    const [currentStep, setCurrentStep] = useState(1);
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null); // Updated to file upload
    const [questions, setQuestions] = useState([]); // Holds questions from the backend
    const [answers, setAnswers] = useState({}); // Holds answers for these questions
    const [jobDescription, setJobDescription] = useState(""); // Holds job description from the backend
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate(); // Add navigate hook for redirecting

    const API_BASE_URL = "http://127.0.0.1:8000"; // Update to match your Django API base URL

    // Fetch job details (e.g., description) and questions
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/job/detail/${jobId}/` // Update to match your Django URL
                );
                setJobDescription(response.data.description);
            } catch (error) {
                console.error("Failed to load job details:", error);
                setJobDescription("Error fetching job details.");
            }
        };

        const fetchQuestions = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/questions/${jobId}/`
                );
                setQuestions(response.data);
            } catch (error) {
                console.error("Failed to load questions:", error);
            }
        };

        fetchJobDetails();
        fetchQuestions();
    }, [jobId]);

    // Navigate to the next or previous step
    const handleNextStep = () => setCurrentStep((prev) => prev + 1);
    const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

    // Handle form input changes for answers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prev) => ({ ...prev, [name]: value }));
    };

    // Submit the application
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Step 1: Submit resume and cover letter
            const formData = new FormData();
            formData.append("user", 10); // Add user ID
            formData.append("job", jobId); // Add job ID
            formData.append("resume", resume);
            formData.append("cover_letter", coverLetter);

            const applicationResponse = await axios.post(
                `${API_BASE_URL}/apply/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const jobApplicationId = applicationResponse.data.id;

            // Step 2: Prepare the answers payload
            const answersPayload = Object.entries(answers).map(
                ([questionId, answerText]) => ({
                    question: parseInt(questionId), // Sending the correct reference (question ID)
                    job_application: jobApplicationId, // The job application ID from the previous step
                    answer_text: answerText,
                })
            );

            console.log(answersPayload); // Debugging: check the format

            // Step 3: Submit answers
            await axios.post(`${API_BASE_URL}/answers/`, answersPayload);

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting application:", error);
            alert(
                "There was an error submitting your application. Please try again."
            );
        }
    };

    // Progress calculation
    const progressPercent = (currentStep / 4) * 100;

    return (
        <div className="container mx-auto p-6">
            <div className="mb-8">
                <div className="relative pt-1">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 text-sm font-medium">
                            Step {currentStep} of 4
                        </span>
                        <span className="text-gray-600 text-sm font-medium">
                            {Math.round(progressPercent)}% Completed
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {isSubmitted ? (
                <div className="text-center text-green-600 text-xl font-semibold">
                    Your application has been submitted successfully!
                    <div className="mt-4">
                        <button
                            onClick={() => navigate("/")} // Navigate to home page
                            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
                        >
                            Explore More Jobs
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-slate-950 mb-6">
                            Apply for Job
                        </h2>

                        {currentStep === 1 && (
                            <div>
                                <h3 className="text-xl text-gray-800 font-semibold mb-4">
                                    Step 1: Upload Resume
                                </h3>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) =>
                                        setResume(e.target.files[0])
                                    }
                                    className="block w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={handleNextStep}
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Next
                                </button>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h3 className="text-xl font-semibold text-slate-950 mb-4">
                                    Step 2: Answer Questions
                                </h3>
                                <div className="space-y-4 text-slate-950">
                                    {questions.map((question) => (
                                        <div key={question.id}>
                                            <label className="block font-medium mb-2">
                                                {question.question_text}
                                            </label>
                                            <input
                                                type="text"
                                                name={`${question.id}`}
                                                value={
                                                    answers[question.id] || ""
                                                }
                                                onChange={handleInputChange}
                                                className="block w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={handlePrevStep}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNextStep}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h3 className="text-xl text-slate-950 font-semibold mb-4">
                                    Step 3: Upload Cover Letter
                                </h3>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) =>
                                        setCoverLetter(e.target.files[0])
                                    }
                                    className="block w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={handlePrevStep}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNextStep}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div>
                                <h3 className="text-xl text-slate-950 font-semibold mb-4">
                                    Step 4: Review Your Application
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">
                                            Resume
                                        </h4>
                                        {resume ? (
                                            <p className="text-gray-700">
                                                {resume.name}
                                            </p>
                                        ) : (
                                            <p className="text-red-500">
                                                No resume uploaded.
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">
                                            Cover Letter
                                        </h4>
                                        {coverLetter ? (
                                            <p className="text-gray-700">
                                                {coverLetter.name}
                                            </p>
                                        ) : (
                                            <p className="text-red-500">
                                                No cover letter uploaded.
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">
                                            Answers to Questions
                                        </h4>
                                        <ul className="space-y-2 text-gray-800">
                                            {questions.map((question) => (
                                                <li key={question.id}>
                                                    <strong>
                                                        {question.question_text}
                                                        :
                                                    </strong>{" "}
                                                    {answers[question.id] ||
                                                        "Not provided"}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-8">
                                    <button
                                        onClick={handlePrevStep}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">
                            Job Description
                        </h2>
                        <div className="bg-white border text-gray-800 rounded-md p-6 shadow-lg">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: jobDescription,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplyJobPage;
