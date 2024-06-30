"use client";

import React from "react";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
function page() {
    return (
        <section className="flex flex-col h-screen w-full bg-light_bg dark:bg-dark_bg">
            <main className="relative px-[4rem] py-[3rem] flex justify-center items-center gap-[3rem] h-full w-full">
                <div className="absolute bottom-[2rem] flex flex-col justify-center items-center gap-[1rem]">
                    <div className="mb-[2rem] flex flex-col items-center gap-[1rem] ">
                        <h4 className="cursor-pointer px-[1.6rem] py-[.8rem] w-[35rem] max-sm:w-[80%] rounded-[.4rem] text-light_text_gray/50 dark:text-dark_text_gray/20 bg-light_bg_50  dark:bg-dark_bg_50 ">
                            create a form for school trip registration that
                            contains name, email, number, division, standard.{" "}
                        </h4>
                        <h4 className="cursor-pointer px-[1.6rem] py-[.8rem] w-[35rem] max-sm:w-[80%] rounded-[.4rem] text-light_text_gray/50 dark:text-dark_text_gray/20 bg-light_bg_50  dark:bg-dark_bg_50 ">
                            create a form for school trip registration that
                            contains name, email, number, division, standard.{" "}
                        </h4>
                        <h4 className="cursor-pointer px-[1.6rem] py-[.8rem] w-[35rem] max-sm:w-[80%] rounded-[.4rem] text-light_text_gray/50 dark:text-dark_text_gray/20 bg-light_bg_50  dark:bg-dark_bg_50 ">
                            create a form for school trip registration that
                            contains name, email, number, division, standard.{" "}
                        </h4>
                    </div>

                    <div className="px-[2rem] max-sm:px-[1rem] w-[40rem] max-sm:w-[85%] flex items-center flex-row rounded-[.4rem] bg-light_bg_50 dark:bg-dark_bg_50 ">
                        <input
                            type="text"
                            className="outline-none h-[3.4rem] w-full font-normal text-light_text_gray dark:text-dark_text_gray bg-transparent placeholder:font-light placeholder:text-light_text_gray/50  dark:placeholder:text-dark_text_gray/50 "
                            placeholder="Enter prompt here..."
                        />
                        <div className="cursor-pointer p-[.4rem]">
                            <FaTelegramPlane className="text-[1.4rem] text-light_text_black dark:text-dark_text_white" />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default page;
