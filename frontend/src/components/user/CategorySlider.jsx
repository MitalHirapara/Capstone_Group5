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
        slidesToShow: 4,
        speed: 500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    

    const renderTemplate = (img, categoryname, numofjob) => (
        <div className="flex flex-col border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 m-1 p-4 md:p-4 border rounded-xl">
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
                    <p className="text-gray-500 text-xs dark:text-neutral-500 uppercase">
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
                    className="-top-96 absolute flex transform -translate-x-1/2 start-1/2"
                >
                </div>

                <div className="relative z-10">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 max-w-[85rem]">
                        <div className="mx-auto max-w-2xl text-center category">
                            <p className="inline-block bg-clip-text font-medium text-gray-500 text-sm sub-heading">
                            Search and connect with the right candidates faster.
                            </p>

                            <div className="mt-5 max-w-2xl">
                                <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200">
                                Popular Job category
                                </h3>
                            </div>
                        </div>
                        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 max-w-[85rem]">
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
