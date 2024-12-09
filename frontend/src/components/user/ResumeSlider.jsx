import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import resume1 from "/ResumeT1.png";
import resume2 from "/ResumeT2.png";
import resume3 from "/ResumeT3.png";
import resume4 from "/ResumeT4.png";
import resume5 from "/ResumeT14.png";
import resume6 from "/ResumeT6.jpg";
import resume7 from "/ResumeT7.jpg";
import resume8 from "/ResumeT8.png";
import resume9 from "/ResumeT9.png";
import resume10 from "/ResumeT10.png";

export default function ResumeSlider() {
    const settings = {
        dots: true,
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "120px",
        slidesToShow: 4,
        speed: 500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet (1024px and below)
                settings: {
                    slidesToShow: 2,
                    centerPadding: "60px",
                },
            },
            {
                breakpoint: 768, // Mobile (768px and below)
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 480, // Extra Small Mobile (480px and below)
                settings: {
                    slidesToShow: 1,
                    centerPadding: "10px",
                },
            },
        ],
    };
    

    const renderTemplate = (template, altText) => (
        <div class="bg-sky-100 dark:bg-neutral-800 m-2 p-5 rounded-2xl">
            <img src={template} alt={altText} className="mx-auto" />
        </div>
    );

    return (
        <div className="relative bg-zinc-50 overflow-hidden">
            <div
                aria-hidden="true"
                className="-top-96 absolute flex transform -translate-x-1/2 start-1/2"
            ></div>

            <div className="relative z-10">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 max-w-[85rem]">
                    <div className="mx-auto max-w-2xl text-center resume">
                        <p className="inline-block bg-clip-text font-medium text-gray-500 text-sm sub-heading">
                            The Best Online Resume Builder
                        </p>

                        <div className="mt-5 max-w-2xl">
                            <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                                Pick one of several world-class templates and
                                create your resume in minutes
                            </h3>
                        </div>
                    </div>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 max-w-[85rem]">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    {renderTemplate(
                                        resume1,
                                        "Resume Template 1"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume2,
                                        "Resume Template 2"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume3,
                                        "Resume Template 3"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume4,
                                        "Resume Template 4"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume5,
                                        "Resume Template 5"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume6,
                                        "Resume Template 6"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume7,
                                        "Resume Template 7"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume8,
                                        "Resume Template 8"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume9,
                                        "Resume Template 9"
                                    )}
                                </div>
                                <div>
                                    {renderTemplate(
                                        resume10,
                                        "Resume Template 10"
                                    )}
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
