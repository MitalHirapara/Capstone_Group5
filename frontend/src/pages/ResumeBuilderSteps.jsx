import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTemplateId,
    selectContactInfo,
    updateContactInfo,
} from "../store/resume/resumeSlice";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import ResumePreview from "../components/resume/ResumePreview";

const ResumeBuilderSteps = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const dispatch = useDispatch();
    const templateId = useSelector(selectTemplateId);
    const contactInfo = useSelector(selectContactInfo);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateContactInfo({ [name]: value }));
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const steps = [
        {
            label: "Contact Info",
            description: "What's the best way for employers to reach you?",
        },
        {
            label: "Education",
            description: "Tell us about your academic background.",
        },
        {
            label: "Experience",
            description:
                "What roles have you held in the past? Include things like internships and part-time jobs if you're light on experience.",
        },
        {
            label: "Skills",
            description:
                "Highlight your key skills and strengths. For best ATS compatibility, stick to 6-12 skills.",
        },
        {
            label: "Preview",
            description: "Get Final Preview of your Resume.",
        },
    ];

    const handleFinish = () => {
        alert("Resume created successfully!");
        navigate("/resume-builder"); // Redirect to /resume-builder
    };

    return (
        <div className="bg-blue-50 py-10">
            <div className="mx-auto max-w-[85rem] p-8">
                {/* Steps Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-center relative">
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 z-0" />
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative text-center flex-1 z-10`}
                            >
                                <div
                                    className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-black font-semibold transition-all duration-300 ${
                                        index + 1 < currentStep
                                            ? "bg-gray-400"
                                            : index + 1 === currentStep
                                            ? "bg-blue-600 text-white"
                                            : "bg-white border-2 border-blue-600"
                                    }`}
                                >
                                    {index + 1}
                                </div>
                                <div
                                    className={`mt-2 text-xs font-medium ${
                                        index + 1 <= currentStep
                                            ? "text-blue-600"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {step.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Form Side */}
                    <div
                        className={`lg:col-span-2 bg-white p-8 shadow-lg rounded-lg ${
                            currentStep === 5 ? "col-span-3 final-preview" : ""
                        }`}
                    >
                        {currentStep === 1 && (
                            <div className="p-4 border border-gray-200 rounded-lg shadow-md">
                                <div className="resume-steps-title mb-5 text-center">
                                    <h2 className="text-xs font-medium text-gray-600 mb-2">
                                        Step 1 of 5
                                    </h2>
                                    <h3 className=" text-2xl font-semibold text-gray-800 mb-4">
                                        Contact Info
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-500 mb-4">
                                        {steps[0].description}
                                    </p>
                                </div>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="John Doe"
                                            value={contactInfo.fullName || ""}
                                            onChange={handleInputChange}
                                            className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="johndoe@gmail.com"
                                            value={contactInfo.email || ""}
                                            onChange={handleInputChange}
                                            className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="123-456-7890"
                                            value={contactInfo.phone || ""}
                                            onChange={handleInputChange}
                                            className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Job Title
                                        </label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            placeholder="Director of Product Management"
                                            value={contactInfo.jobTitle || ""}
                                            onChange={handleInputChange}
                                            className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Career Objective
                                        </label>
                                        <textarea
                                            name="careerObjective"
                                            placeholder="Briefly describe your career goals"
                                            value={
                                                contactInfo.careerObjective ||
                                                ""
                                            }
                                            onChange={handleInputChange}
                                            className="block w-full border-gray-300 text-gray-700 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                            required
                                        />
                                        {!contactInfo.careerObjective && (
                                            <p className="text-red-500 text-sm mt-2">
                                                Career objective is required.
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Brooklyn, NY"
                                            value={contactInfo.location || ""}
                                            onChange={handleInputChange}
                                            className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                            required
                                        />
                                    </div>
                                </form>
                                <div className="flex justify-end mt-6">
                                    <button
                                        type="button"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                        onClick={handleNextStep}
                                    >
                                        Next: Education
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <>
                                <Education
                                    steps={steps}
                                    currentStep={currentStep}
                                />
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                                        onClick={handlePrevStep}
                                    >
                                        Back: Contact Info
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                        onClick={handleNextStep}
                                    >
                                        Next: Experience
                                    </button>
                                </div>
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                <Experience
                                    steps={steps}
                                    currentStep={currentStep}
                                />
                                <div className="flex justify-between mt-5">
                                    <button
                                        type="button"
                                        className="bg-gray-600 hover:bg-gray-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-gray-500 text-white"
                                        onClick={handlePrevStep}
                                    >
                                        Back: Education
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-blue-600 hover:bg-blue-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-blue-500 text-white"
                                        onClick={handleNextStep}
                                    >
                                        Next: Skills
                                    </button>
                                </div>
                            </>
                        )}

                        {currentStep === 4 && (
                            <>
                                <Skills
                                    steps={steps}
                                    currentStep={currentStep}
                                />
                                <div className="flex justify-between  mt-5">
                                    <button
                                        type="button"
                                        className="bg-gray-600 hover:bg-gray-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-gray-500 text-white"
                                        onClick={handlePrevStep}
                                    >
                                        Back: Experience
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-blue-600 hover:bg-blue-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-blue-500 text-white"
                                        onClick={handleNextStep}
                                    >
                                        Next: Preview
                                    </button>
                                </div>
                            </>
                        )}

                        {currentStep === 5 && (
                            <>
                                <h2 className="text-xs font-medium text-gray-600 mb-2">
                                    Step 5 of 5
                                </h2>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Preview Your Resume
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    Here's a preview of your resume with the
                                    information you've provided.
                                </p>
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                    <ResumePreview templateId={templateId} />
                                </div>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                                        onClick={handlePrevStep}
                                    >
                                        Back: Skills
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                                        onClick={handleFinish} // Call navigation function
                                    >
                                        Finish & Save
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Resume Preview Side */}
                    {currentStep !== 5 && (
                        <div className="lg:col-span-1 bg-white p-6 shadow-lg rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Resume Preview
                            </h2>
                            <ResumePreview templateId={templateId} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilderSteps;
