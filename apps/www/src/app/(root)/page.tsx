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
            <main className="flex flex-col items-center w-full">
                <div
                    id="intro"
                    className="flex flex-col h-dvh gap-y-10 justify-center items-center"
                >
                    <h1 className="font-light text-center leading-[1.12] tracking-tighter text-[5rem]">
                        An ai form generator
                    </h1>
                    <p className="w-[90%] max-w-4xl text-center font-normal text-base">
                        {
                            "An web based intuitive SaaS platform that takes your prompt and generates customized, dynamic forms instantly, enhancing data collection and user interaction."
                        }
                    </p>
                    <Link href={pathToNavigate}>
                        <Button
                            variant={"default"}
                            className="bg-white text-black px-16 my-4"
                        >
                            Get started
                        </Button>
                    </Link>
                </div>
            </main>
        </>
    );
}
