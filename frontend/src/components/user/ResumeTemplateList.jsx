import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTemplate } from "../../store/resume/resumeSlice";

const ResumeTemplates = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [templates, setTemplates] = useState([]);

    // Simulating fetching data from an API or similar
    useEffect(() => {
        const fetchTemplates = async () => {
            // For demonstration, you can replace this with your API call
            const fetchedTemplates = [
                    { id: 1, imgSrc: "/ResumeT1.png" },
                    { id: 2, imgSrc: "/ResumeT2.png" },
                    { id: 3, imgSrc: "/ResumeT3.png" },
                    { id: 4, imgSrc: "/ResumeT4.png" },
                    { id: 5, imgSrc: "/ResumeT5.png" },
                    { id: 6, imgSrc: "/ResumeT6.jpg" },
                    { id: 7, imgSrc: "/ResumeT7.jpg" },
                    { id: 8, imgSrc: "/ResumeT8.png" },
                    { id: 9, imgSrc: "/ResumeT9.png" },
                    { id: 10, imgSrc: "/ResumeT10.png" },
                    { id: 11, imgSrc: "/ResumeT11.png" },
                    { id: 12, imgSrc: "/ResumeT12.jpg" },
                    { id: 13, imgSrc: "/ResumeT13.png" },
                    { id: 14, imgSrc: "/ResumeT14.png" },
                    { id: 15, imgSrc: "/ResumeT15.png" },
                    { id: 16, imgSrc: "/ResumeT16.png" },
                    { id: 17, imgSrc: "/ResumeT17.png" }
                
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
        <div className="resume-selection-page max-w-[85rem] mt-6 mb-6 mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="resume-list template-item border rounded-lg overflow-hidden shadow-md"
                    >
                        <div className="resume-photo">
                            <img
                                src={template.imgSrc}
                                alt={`Resume ${template.id}`}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <button
                                onClick={() =>
                                    handleTemplateSelect(template.id)
                                }
                                className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
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
