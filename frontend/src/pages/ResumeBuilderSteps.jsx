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
        <div className="mx-auto max-w-[85rem]">
            <div className="gap-8 grid grid-cols-1 lg:grid-cols-5 p-8">
                {/* Form Side */}
                <div className="col-span-3">
                    {currentStep === 1 && (
                        <div className="border-gray-200 shadow-md p-6 border rounded-lg">
                            <h2 className="mb-4 font-bold text-2xl text-gray-800">
                                Step 1 of 5: Contact Info
                            </h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="John Doe"
                                        // value={contactInfo.fullName}
                                        onChange={handleInputChange}
                                        className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-1 focus:ring-blue-500 w-full text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={contactInfo.email}
                                        placeholder="johndoe@gmail.com"
                                        onChange={handleInputChange}
                                        className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-1 focus:ring-blue-500 w-full text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="123-456-7890"
                                        value={contactInfo.phone}
                                        onChange={handleInputChange}
                                        className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-1 focus:ring-blue-500 w-full text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={contactInfo.jobTitle}
                                        onChange={handleInputChange}
                                        className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-1 focus:ring-blue-500 w-full text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 font-medium text-gray-700 text-sm">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={contactInfo.location}
                                        onChange={handleInputChange}
                                        className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-1 focus:ring-blue-500 w-full text-sm"
                                        required
                                    />
                                </div>
                            </form>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-blue-600 hover:bg-blue-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-blue-500 text-white"
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
                                    className="bg-gray-600 hover:bg-gray-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-gray-500 text-white"
                                    onClick={handlePrevStep}
                                >
                                    Back: Contact Info
                                </button>
                                <button
                                    type="button"
                                    className="bg-blue-600 hover:bg-blue-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-blue-500 text-white"
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
                            <Skills />
                            <div className="flex justify-between">
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
                                    className="bg-gray-600 hover:bg-gray-700 focus:ring-opacity-50 px-6 py-2 rounded-lg focus:ring-4 focus:ring-gray-500 text-white"
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
                <div className="border-gray-200 col-span-2 bg-white shadow-md p-4 border rounded-lg resume-preview">
                    <ResumePreview templateId={templateId} />
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilderSteps;
