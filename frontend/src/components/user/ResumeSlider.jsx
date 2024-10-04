import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import resume1 from "../../../public/resume1.png";
import resume2 from "../../../public/resume2.png";
import resume3 from "../../../public/resume3.png";
import resume4 from "../../../public/resume4.png";
import resume5 from "../../../public/resume5.png";

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
    };

    const renderTemplate = (template, altText) => (
        <div class="bg-sky-100 rounded-2xl dark:bg-neutral-800 p-5 m-2">
            <img src={template} alt={altText} className="mx-auto" />
        </div>
    );

    return (
        <div className="relative bg-zinc-50 overflow-hidden">
            <div
                aria-hidden="true"
                className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
            ></div>

            <div className="relative z-10">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="resume max-w-2xl text-center mx-auto">
                        <p className="sub-heading inline-block text-sm font-medium bg-clip-text text-gray-500 ">
                            The Best Online Resume Builder
                        </p>

                        <div className="mt-5 max-w-2xl">
                            <h3 className="block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-neutral-200">
                                Pick one of several world-class templates and
                                create your resume in minutes
                            </h3>
                        </div>
                    </div>
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
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
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
