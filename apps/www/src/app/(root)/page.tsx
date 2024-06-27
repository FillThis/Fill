"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    const [pathToNavigate, setPathToNavigate] = useState<string>("/login");

    useEffect(() => {
        // let loggedin = Check if user is login or not.
        // if (loggedin) {
        //     setPathToNavigate("/dashboard");
        // } else {
        //     setPathToNavigate("/login");
        // }
    });

    return (
        <>
            <main className="flex flex-col justify-center items-center h-screen w-full bg-light_bg dark:bg-dark_bg">
                <div
                    id="intro"
                    className="flex flex-col gap-y-10 justify-center items-center bg-transparent"
                >
                    <h1 className="font-light text-center leading-[1.12] tracking-tighter text-[5rem] text-light_text_black dark:text-dark_text_white">
                        An ai form generator
                    </h1>
                    <p className="w-[90%] max-w-4xl text-center font-normal text-base text-light_text_black dark:text-dark_text_white">
                        An web based intuitive SaaS platform that takes your
                        prompt and generates customized, dynamic forms
                        instantly, enhancing data collection and user
                        interaction."
                    </p>
                    <Link href={pathToNavigate}>
                        <Button
                            variant={"default"}
                            className="bg-light_text_black dark:bg-dark_text_white text-light_bg dark:text-dark_bg px-16 my-4"
                        >
                            Get started
                        </Button>
                    </Link>
                </div>
            </main>
        </>
    );
}
