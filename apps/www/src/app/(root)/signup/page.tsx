"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

function Page() {
    return (
        <div className=" flex  h-screen w-full bg-[#26272c]">
            <div className="py-[3rem] flex flex-col gap-[3rem] items-center h-full w-[30%] bg-[#171717]">
                <Image
                    src={"/byte_forms.svg"}
                    alt="Byte Forms"
                    width={200}
                    height={50}
                ></Image>
                <div className="flex flex-col gap-[.6rem] w-[70%]">
                    <div className="flex flex-col gap-[.2rem]">
                        <label
                            htmlFor="Name"
                            className="text-[1rem] font-medium text-[#E6E6E6]"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="Name"
                            className=" h-[2.2rem] px-[.6rem] rounded-[.3rem] text-[#E6E6E6] placeholder:font-light placeholder:text-white/20  bg-[#111111] "
                            placeholder="James"
                        />
                    </div>
                    <div className="flex flex-col gap-[.2rem]">
                        <label
                            htmlFor="email"
                            className="text-[1rem] font-medium text-[#E6E6E6]"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className=" h-[2.2rem] px-[.6rem] rounded-[.3rem] text-[#E6E6E6] placeholder:font-light placeholder:text-white/20  bg-[#111111] "
                            placeholder="name@host.com"
                        />
                    </div>
                    <div className="flex flex-col gap-[.2rem]">
                        <label
                            htmlFor="Password"
                            className="text-[1rem] font-medium text-[#E6E6E6]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className=" h-[2.2rem] px-[.6rem] rounded-[.3rem] text-[#E6E6E6] placeholder:font-light placeholder:text-white/20  bg-[#111111] "
                            id="Password"
                            placeholder="password"
                        />
                        <p className="mt-[.1rem] cursor-pointer text-[.8rem] text-[#0012FF]">
                            Forgot password?
                        </p>
                    </div>
                    <div className="mt-[1rem] flex flex-col gap-[.6rem]">
                        <button className="flex justify-center items-center rounded-[.3rem] bg-gradient-to-r from-[#F4546D] via-[#D750A6] via-[#AC4EF4] to-[#5A87FD]  h-[2.4rem] w-full text-white font-semibold">
                            Log in
                        </button>
                        <p className="text-center text-[#E6E6E6] text-[.9rem]">
                            already have account?{" "}
                            <Link
                                href={"/login"}
                                className="ml-[.1rem] text-[#0012FF]"
                            >
                                Login
                            </Link>{" "}
                        </p>
                    </div>

                    <div className="mt-[1.6rem] relative flex items-center justify-center w-full">
                        <div className="flex z-10 justify-center items-center h-[2.4rem] w-[2.4rem] rounded-full border-[1px] text-[.8rem] border-[#E6E6E6]/20 text-[#E6E6E6] bg-[#171717] ">
                            OR
                        </div>
                        <hr className="absolute w-full border-[#E6E6E6]/20" />
                    </div>

                    <div className="mt-[2rem] flex flex-col gap-[.8rem]">
                        <button
                            onClick={() => signIn("google")}
                            className="px-[1rem] flex justify-center items-center gap-[.6rem] rounded-[.3rem] bg-[#26272c]  h-[2.4rem] w-full text-white font-semibold"
                        >
                            <FcGoogle className="text-[1.6rem]" />
                            <h2 className="text-[1.1rem]">Google</h2>
                        </button>
                        <button
                            onClick={() => signIn("github")}
                            className="px-[1rem] flex justify-center items-center gap-[.6rem] rounded-[.3rem] bg-[#26272c]  h-[2.4rem] w-full  font-semibold"
                        >
                            <FaGithub className="text-[1.7rem]" />
                            <h2 className="text-[1.1rem] text-white">Github</h2>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-full w-full bg-[#1e1e1e]"></div>
        </div>
    );
}

export default Page;
