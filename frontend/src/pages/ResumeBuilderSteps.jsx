import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTemplateId,
    selectContactInfo,
    updateContactInfo,
} from "../store/resume/resumeSlice";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import Certifications from "../components/resume/Certifications";
import ResumePreview from "../components/resume/ResumePreview";

const ResumeBuilderSteps = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const dispatch = useDispatch();
    const templateId = useSelector(selectTemplateId);
    const contactInfo = useSelector(selectContactInfo);

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

    return (
        <div className="max-w-[85rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8">
                {/* Form Side */}
                <div className="col-span-3">
                    {currentStep === 1 && (
                        <div className="p-6 border border-gray-200 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                                Step 1 of 5: Contact Info
                            </h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="John Doe"
                                        // value={contactInfo.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={contactInfo.email}
                                        placeholder="johndoe@gmail.com"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="123-456-7890"
                                        value={contactInfo.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={contactInfo.jobTitle}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={contactInfo.location}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </form>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                    onClick={handleNextStep}
                                >
                                    Next: Education
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <>
                            <Education />
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                                    onClick={handlePrevStep}
                                >
                                    Back: Contact Info
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                    onClick={handleNextStep}
                                >
                                    Next: Experience
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 3 && (
                        <>
                            <Experience />
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                                    onClick={handlePrevStep}
                                >
                                    Back: Education
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                    onClick={handleNextStep}
                                >
                                    Next: Skills
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 4 && (
                        <>
                            <Skills />
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                                    onClick={handlePrevStep}
                                >
                                    Back: Experience
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                    onClick={handleNextStep}
                                >
                                    Next: Certifications
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 5 && (
                        <>
                            <Certifications />
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                                    onClick={handlePrevStep}
                                >
                                    Back: Skills
                                </button>
                            </div>
                        </>
                    )}

                    {/* Add more steps for Skills, Certifications, etc. */}
                </div>

                {/* Resume Preview Side */}
                <div className="col-span-2 resume-preview p-4 border border-gray-200 rounded-lg shadow-md bg-white">
                    <ResumePreview templateId={templateId} />
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilderSteps;
