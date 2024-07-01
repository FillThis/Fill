"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function Page() {
    return (
        <div className="bg-light_bg dark:bg-dark_bg flex h-screen w-full items-center justify-center">
            <div
                id="login-page"
                className="bg-light_bg dark:bg-dark_bg m-auto flex h-full w-[90%] max-w-md flex-col items-center justify-center gap-y-8"
            >
                <p className="text-light_text_black dark:text-dark_text_white text-[2rem]">
                    Sign Up
                </p>
                <div className="flex w-full flex-col items-end gap-y-8">
                    <span className="flex w-full flex-col gap-y-4">
                        <Label
                            htmlFor="email"
                            className="text-light_text_black dark:text-dark_text_white"
                        >
                            Enter email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="e.g. name@example.com"
                            type="email"
                            className="text-light_text_black dark:text-dark_text_white border-light_text_black dark:border-dark_text_white bg-transparent"
                        ></Input>
                    </span>
                    <span className="flex w-full flex-col gap-y-4">
                        <Label
                            htmlFor="password"
                            className="text-light_text_black dark:text-dark_text_white"
                        >
                            Enter password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="********"
                            type="password"
                            className="text-light_text_black dark:text-dark_text_white border-light_text_black dark:border-dark_text_white bg-transparent"
                        ></Input>
                    </span>

                    <Button type="button" className="w-32">
                        Sign Up
                    </Button>
                </div>
                <div
                    id="or-text"
                    className="text-light_text_black dark:text-dark_text_white flex items-center justify-center gap-x-4 text-center opacity-50"
                >
                    <span className="bg-light_text_black dark:bg-dark_text_white h-[1px] w-32"></span>
                    or
                    <span className="bg-light_text_black dark:bg-dark_text_white h-[1px] w-32"></span>
                </div>

                <button
                    type="button"
                    onClick={() => signIn("google")}
                    className="bg-light_text_black dark:bg-dark_text_white flex h-[2.8rem] w-full items-center justify-center gap-[.6rem] rounded-[.3rem] px-[1rem] font-semibold"
                >
                    <FcGoogle className="text-[1.7rem]" />
                    <h2 className="text-light_bg dark:text-dark_bg text-[1.1rem]">
                        Google
                    </h2>
                </button>
            </div>
        </div>
    );
}

export default Page;
