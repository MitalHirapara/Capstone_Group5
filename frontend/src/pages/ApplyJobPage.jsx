import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyJobPage = () => {
    const jobId = 3;
    const [currentStep, setCurrentStep] = useState(1);
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [jobDescription, setJobDescription] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    // Error states
    const [resumeError, setResumeError] = useState("");
    const [coverLetterError, setCoverLetterError] = useState("");
    const [answersError, setAnswersError] = useState("");

    const navigate = useNavigate();
    const API_BASE_URL = "http://127.0.0.1:8000";

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/job/detail/${jobId}/`
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

    useEffect(() => {
        // Validate final submission readiness
        const isValid =
            resume &&
            coverLetter &&
            questions.every(
                (q) => answers[q.id] && answers[q.id].trim().length > 0
            );
        setIsSubmitDisabled(!isValid);
    }, [resume, coverLetter, answers, questions]);

    const handleNextStep = () => {
        // Validate fields before proceeding
        if (currentStep === 1 && !resume) {
            setResumeError("Please upload your resume.");
            return;
        }
        if (
            currentStep === 2 &&
            questions.some((q) => !answers[q.id] || answers[q.id].trim() === "")
        ) {
            setAnswersError("Please answer all the questions.");
            return;
        }
        if (currentStep === 3 && !coverLetter) {
            setCoverLetterError("Please upload your cover letter.");
            return;
        }

        // Clear errors and proceed
        setResumeError("");
        setCoverLetterError("");
        setAnswersError("");
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitDisabled) return;

        try {
            const formData = new FormData();
            formData.append("user", 10);
            formData.append("job", jobId);
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

            const answersPayload = Object.entries(answers).map(
                ([questionId, answerText]) => ({
                    question: parseInt(questionId),
                    job_application: jobApplicationId,
                    answer_text: answerText,
                })
            );

            await axios.post(`${API_BASE_URL}/answers/`, answersPayload);

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting application:", error);
            alert(
                "There was an error submitting your application. Please try again."
            );
        }
    };

    const progressPercent = (currentStep / 4) * 100;

    return (
        <div className="container mx-auto p-4 lg:p-6">
            <div className="relative bg-white rounded-lg shadow-lg p-6 lg:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-slate-800">
                        Apply for Job
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Complete your application in a few steps
                    </p>
                </div>

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
                        <p className="text-gray-500 mt-2">
                            Thank you for applying. We will get back to you
                            soon.
                        </p>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-950 mb-6">
                                Apply for Job
                            </h2>

                            {currentStep === 1 && (
                                <div>
                                    <h3 className="text-xl text-slate-950 font-semibold mb-4">
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
                                    {resumeError && (
                                        <p className="text-red-500 mt-2">
                                            {resumeError}
                                        </p>
                                    )}
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
                                    <h3 className="text-xl text-slate-950 font-semibold mb-4">
                                        Step 2: Answer Questions
                                    </h3>
                                    {questions.map((question) => (
                                        <div key={question.id}>
                                            <label className="block mb-2 text-gray-500 ">
                                                {question.question_text}
                                            </label>
                                            <input
                                                type="text"
                                                name={`${question.id}`}
                                                value={
                                                    answers[question.id] || ""
                                                }
                                                onChange={handleInputChange}
                                                className="block p-3 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                            />
                                        </div>
                                    ))}
                                    {answersError && (
                                        <p className="text-red-500 mt-2">
                                            {answersError}
                                        </p>
                                    )}
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
                                    {coverLetterError && (
                                        <p className="text-red-500 mt-2">
                                            {coverLetterError}
                                        </p>
                                    )}
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
                                                            {
                                                                question.question_text
                                                            }
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
                                            disabled={isSubmitDisabled}
                                            className={`bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 ${
                                                isSubmitDisabled
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
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
                            <div className="bg-gray-100 border text-gray-800 rounded-md p-6 shadow-sm">
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
        </div>
    );
};

export default ApplyJobPage;
