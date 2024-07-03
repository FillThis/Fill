"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

const Home = () => {
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
            <main className="flex h-dvh w-full flex-col items-center justify-center">
                <div
                    id="intro"
                    className="flex flex-col items-center justify-center gap-y-4 md:gap-y-10"
                >
                    <h1 className="text-foreground text-center text-[2.25rem] font-medium tracking-tighter md:text-[5rem] md:leading-[1.12]">
                        An ai form generator
                    </h1>
                    <p className="text-foreground w-[90%] max-w-4xl text-center text-base font-normal leading-8">
                        An web based intuitive SaaS platform that takes your
                        prompt and generates customized, dynamic forms
                        instantly, enhancing data collection and user
                        interaction."
                    </p>
                    <div className="flex w-full items-center justify-center">
                        <Button
                            variant={"default"}
                            className="mt-8 px-12 md:mt-4 md:px-16"
                        >
                            Get started
                        </Button>
                        <Button
                            variant={"link"}
                            className="mt-8 px-12 md:mt-4 md:px-16"
                        >
                            Open dashboard{" "}
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
