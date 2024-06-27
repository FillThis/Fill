"use client";

import React from "react";
import Link from "next/link";
import { FaTelegramPlane, FaUpload } from "react-icons/fa";

function page() {
    return (
        <section className="flex flex-col  h-fit w-full bg-light_bg dark:bg-dark_bg ">
            <main className="relative px-[4rem] py-[3rem] flex justify-center items-center gap-[3rem] h-full  w-full">
                <form
                    action=""
                    className="px-[3rem] py-[2rem] flex flex-col gap-[1.4rem] rounded-[.5rem] w-[40rem] bg-light_bg_50 text-light_text_gray dark:bg-dark_bg_50/80 dark:text-dark_text_gray"
                >
                    <div className="mb-[1.6rem]">
                        <h1 className="text-[1.6rem] font-semibold">
                            IBM Technology
                        </h1>
                        <h4 className="font-normal">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Natus blanditiis impedit consectetur alias
                            ipsum maiores odit voluptatibus! Quo, amet nulla?
                        </h4>
                    </div>
                    {/* ---------------------------- form --------------------------- */}
                    <div className="px-[1rem] py-[1rem] flex flex-col gap-[.6rem] rounded-[.4rem] bg-white dark:bg-dark_bg_50">
                        <label
                            htmlFor="name"
                            className="text-[1.2rem] font-medium"
                        >
                            Name *
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="outline-none pb-[.4rem] border-b-[1.5px] placeholder:text-[#585858] border-[#585858] bg-transparent"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="px-[1rem] py-[1rem] flex flex-col gap-[.6rem] rounded-[.4rem] bg-white dark:bg-dark_bg_50">
                        <label
                            htmlFor="email"
                            className="text-[1.2rem] font-medium"
                        >
                            Email *
                        </label>
                        <input
                            id="email"
                            type="text"
                            className="pb-[.4rem] border-b-[1.5px] placeholder:text-[#585858] border-[#585858] bg-transparent"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="px-[1rem] py-[1rem] flex flex-col gap-[.6rem] rounded-[.4rem] bg-white dark:bg-dark_bg_50">
                        <label
                            htmlFor="dateofbirth"
                            className="text-[1.2rem] font-medium"
                        >
                            Birth Date *
                        </label>
                        <input
                            id="dateofbirth"
                            name="dateofbirth"
                            type="date"
                            className="pb-[.4rem] border-b-[1.5px] placeholder:text-[#585858] border-[#585858] bg-transparent"
                        />
                    </div>

                    <div className="px-[1rem] py-[1rem] flex flex-col gap-[.6rem] rounded-[.4rem] bg-white dark:bg-dark_bg_50">
                        <label
                            htmlFor="dateofbirth"
                            className="text-[1.2rem] font-medium"
                        >
                            Gender *
                        </label>
                        <div className="flex items-center gap-[1rem]">
                            <input type="radio" name="Gender" id="male" />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="flex items-center gap-[1rem]">
                            <input type="radio" name="Gender" id="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="flex items-center gap-[1rem]">
                            <input type="radio" name="Gender" id="Other" />
                            <label htmlFor="Other">Other</label>
                        </div>
                    </div>

                    <div className="px-[1rem] py-[1rem] flex flex-col gap-[.6rem] rounded-[.4rem] bg-white dark:bg-dark_bg_50">
                        <label
                            htmlFor="file"
                            className="text-[1.2rem] font-medium"
                        >
                            Resume *
                        </label>

                        <label
                            htmlFor="file"
                            className="px-[1rem] flex justify-between items-center rounded-[.4rem] h-[2.6rem] w-[16rem] border-[1.5px] border-[#585858] text-[1.2rem] font-medium"
                        >
                            <h2 className=" text-[#585858]">Upload file</h2>
                            <FaUpload className="text-[] text-[#585858]" />
                        </label>
                        <input
                            id="file"
                            name="file"
                            type="file"
                            className="hidden pb-[.4rem] border-b-[1.5px] placeholder:text-[#585858] border-[#585858] bg-transparent"
                        />
                    </div>

                    {/* ---------------------------- form --------------------------- */}
                    <div className="flex justify-between items-center">
                        <button className=" w-[6.2rem] h-[2.2rem] rounded-[.2rem] font-medium  bg-light_text_black dark:bg-dark_text_white text-light_bg dark:text-dark_bg">
                            Submit
                        </button>
                        <button className=" w-[6.2rem] h-[2.2rem] rounded-[.2rem] ">
                            Clear form
                        </button>
                    </div>
                </form>
            </main>
        </section>
    );
}

export default page;
