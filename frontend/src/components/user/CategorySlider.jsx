import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cat1 from "../../../public/marketing.svg";
import cat2 from "../../../public/customer.svg";
import cat3 from "../../../public/finance.svg";
import cat4 from "../../../public/lightning.svg";
import cat5 from "../../../public/human.svg";
import cat6 from "../../../public/management.svg";
import cat7 from "../../../public/security.svg";
import cat8 from "../../../public/content.svg";
import cat9 from "../../../public/research.svg";

export default function CategorySlider() {
    const settings = {
        dots: true,
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "120px",
        slidesToShow: 5,
        speed: 500,
        arrows: true,
    };

    const renderTemplate = (img, categoryname, numofjob) => (
        <div className="flex m-1 flex-col rounded-xl p-4 md:p-4 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
            <div className="flex items-center gap-x-3">
                <img
                    className="size-12"
                    src={img}
                    alt="Avatar"
                />
                <div className="grow">
                    <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                        {categoryname}
                    </h3>
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        {numofjob}
                    </p>
                </div>
            </div>
        </div>

    );

    return (

        <>
            <div className="relative bg-zinc-50 overflow-hidden">
                <div
                    aria-hidden="true"
                    className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
                >
                </div>

                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="category max-w-2xl text-center mx-auto">
                            <p className="sub-heading inline-block text-sm font-medium bg-clip-text text-gray-500 ">
                            Search and connect with the right candidates faster.
                            </p>

                            <div className="mt-5 max-w-2xl">
                                <h3 className="block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-neutral-200">
                                Popular Job category
                                </h3>
                            </div>
                        </div>
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div>
                                        {renderTemplate(
                                            cat1,
                                            "Marketing & Sale",
                                            "256 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat2,
                                            "Customer Help",
                                            "123 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat3,
                                            "Finance",
                                            "456 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat4,
                                            "IT Software",
                                            "789 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat5,
                                            "Human Resource",
                                            "345 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat6,
                                            "Management",
                                            "445 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat7,
                                            "Security",
                                            "505 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat8,
                                            "Content Writer",
                                            "345 Jobs Available"
                                        )}
                                    </div>
                                    <div>
                                        {renderTemplate(
                                            cat9,
                                            "Market Research",
                                            "321 Jobs Available"
                                        )}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
