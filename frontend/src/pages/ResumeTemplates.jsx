import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTemplate } from "../store/resume/resumeSlice";

const ResumeTemplates = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [templates, setTemplates] = useState([]);

    // Simulating fetching data from an API or similar
    useEffect(() => {
        const fetchTemplates = async () => {
            // For demonstration, you can replace this with your API call
            const fetchedTemplates = [
                { id: 1, imgSrc: "/resume1.png" },
                { id: 2, imgSrc: "/resume2.png" },
                { id: 3, imgSrc: "/resume3.png" },
                { id: 4, imgSrc: "/resume4.png" },
                { id: 5, imgSrc: "/resume5.png" },
                // Add more templates as needed
            ];
            setTemplates(fetchedTemplates);
        };

        fetchTemplates();
    }, []);

    const handleTemplateSelect = (templateId) => {
        dispatch(setTemplate(templateId)); // Dispatching the selected template ID
        navigate(`/resume-builder/${templateId}`); // Navigating to the resume builder with the selected template
    };

    return (
        <div className="resume-selection-page px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">
                Select a Resume Template
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="template-item border rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={template.imgSrc}
                            alt={`Resume ${template.id}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <button
                                onClick={() =>
                                    handleTemplateSelect(template.id)
                                }
                                className="btn btn-primary bg-slate-950 text-white px-4 py-2 rounded"
                            >
                                Use this template
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResumeTemplates;
