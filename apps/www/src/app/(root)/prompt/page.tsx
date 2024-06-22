"use client";

import React from "react";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
function page() {
    return (
        <section className="flex flex-col h-screen w-full bg-[#1e1e1e]">
            <main className="relative px-[4rem]  py-[3rem] flex justify-center items-center gap-[3rem] h-full w-full">
                <div className="absolute bottom-[2rem] flex flex-col justify-center items-center gap-[1rem]">
                    <div className="mb-[2rem] flex flex-col gap-[1rem] ">
                        <h4 className="px-[1.6rem] py-[.8rem] w-[35rem] rounded-[.4rem] text-white/40  bg-[#2e2e2e] ">
                            create a form for school trip registration that
                            contains name, email, number, division, standard.{" "}
                        </h4>
                        <h4 className="px-[1.6rem] py-[.8rem] w-[35rem] rounded-[.4rem] text-white/40  bg-[#2e2e2e] ">
                            create a form for school trip registration that
                            contains name, email, number, division, standard.{" "}
                        </h4>
                        <h4 className="px-[1.6rem] py-[.8rem] w-[35rem] rounded-[.4rem] text-white/40  bg-[#2e2e2e] ">
                            create a form for school trip registration that
                            contains name, email, number, division, standard.{" "}
                        </h4>
                    </div>

                    <div className="px-[2rem] w-[40rem] flex items-center flex-row rounded-[.4rem] bg-[#2e2e2e] ">
                        <input
                            type="text"
                            className=" h-[3.4rem] w-full font-normal text-[#E6E6E6] bg-transparent placeholder:font-light placeholder:text-white/20 "
                            placeholder="Enter prompt here..."
                        />
                        <div className="cursor-pointer p-[.4rem]">
                            <FaTelegramPlane className="text-[1.4rem] text-[#E6E6E6]" />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default page;
