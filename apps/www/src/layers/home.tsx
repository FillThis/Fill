/**
 * @license
 * Copyright 2024 ascen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use client";

import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import LinksFooter from "@/components/footer/LinksFooter";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
    KeyboardArrowUpSharp,
    KeyboardArrowRightSharp,
} from "@mui/icons-material";
import DecreasingSpacer from "@/components/ui/decreasing-spacer";
import { GenAI } from "@/lib/genAI";
import { formDataStore } from "@/store/formData.store";
import { useAtom } from "jotai";
import { Loader } from "@/components/ui/loader";

const Home = () => {
    const [pathToNavigate, setPathToNavigate] = useState<string>("/login");
    const [subject, setSubject] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router: AppRouterInstance = useRouter();
    const [formData, setFormData] = useAtom(formDataStore);

    useEffect(() => {
        // let loggedin = Check if user is login or not.
        // if (loggedin) {
        //     setPathToNavigate("/dashboard");
        // } else {
        //     setPathToNavigate("/login");
        // }
    });

    const handleSubjectChange: ChangeEventHandler<HTMLTextAreaElement> = (
        e: ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setSubject(e.target.value);
    };

    const handleSubjectOnClick: React.MouseEventHandler<
        HTMLButtonElement
    > = async () => {
        if (!subject) return;
        setLoading(true);

        // Generate form using gen_ai
        const genAI = new GenAI();
        let res = await genAI.generateFormContent(subject.trim());

        // Write in store
        await setFormData(res);
        setLoading(false);
        return router.push("dashboard/form");
    };

    return (
        <>
            <main className="m-auto flex h-full w-full flex-auto flex-col">
                <section
                    id="subject_action"
                    className="h-with-nav mx-auto flex w-full max-w-2xl flex-auto flex-col justify-center py-8"
                >
                    <div className="flex h-full flex-auto flex-col justify-center gap-y-4">
                        <h1 className="text-foreground text-4xl font-medium tracking-tighter md:text-[4rem] md:leading-[4rem]">
                            Generate now...
                        </h1>
                        <p className="text-muted-foreground leading-[1.6rem]">
                            Enter your purpose into below box and generate form
                            quickly.
                        </p>
                        <div
                            className={cn(
                                "border-foreground mt-8 flex w-full flex-col items-end justify-center gap-4 rounded-none border p-4",
                                subject.length === 0
                                    ? "border-foreground/50 focus-visible:border-foreground/50"
                                    : "border-foreground focus-visible:border-foreground",
                            )}
                        >
                            <Textarea
                                value={subject}
                                onChange={handleSubjectChange}
                                // autoFocus={true}
                                placeholder="Enter your form subject here..."
                                className={cn(
                                    "h-24 resize-none rounded-none rounded-br-none border-none p-0 outline-none focus-visible:border-none",
                                )}
                            />
                            <div className="flex items-center justify-center">
                                {loading && <Loader />}
                                <Button
                                    className="rounded-one px-6"
                                    disabled={subject.split(" ").length <= 3}
                                    onClick={handleSubjectOnClick}
                                >
                                    Generate
                                    <KeyboardArrowRightSharp
                                        fontSize="large"
                                        className="ml-1"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <KeyboardArrowUpSharp
                        fontSize="large"
                        className="m-0 p-0 text-[2.5rem]"
                    />
                    <KeyboardArrowUpSharp
                        fontSize="large"
                        className="m-0 p-0 text-[2.5rem] opacity-50"
                    />
                </section>
                <section
                    id="intro"
                    className="flex h-dvh flex-auto flex-col py-4"
                >
                    <div className="mx-auto flex items-center justify-center">
                        <span className="bg-foreground mr-4 h-5 w-5 rounded-full"></span>
                        <h2 className="text-center font-medium">
                            What is Fill?
                        </h2>
                    </div>

                    <DecreasingSpacer className="opacity-75" />

                    <div className="flex h-full flex-col justify-center gap-y-4 md:items-center md:gap-y-8">
                        <h1 className="text-foreground text-[2rem] font-medium leading-[2.4rem] tracking-tighter md:text-center md:text-[4rem] md:leading-[4rem]">
                            A quick A.I. form generator.
                        </h1>
                        <p className="text-muted-foreground w-full max-w-4xl text-base font-normal leading-[1.6rem] md:text-center">
                            An web based intuitive SaaS platform that takes your
                            prompt and generates customized, dynamic forms
                            instantly, enhancing data collection and user
                            interaction.
                        </p>
                        <div className="mt-8 flex w-full flex-col justify-center gap-y-4 md:flex-row">
                            <Button
                                variant={"default"}
                                className="px-12 max-md:w-full md:mt-4 md:px-16"
                            >
                                Get started
                            </Button>
                            <Button
                                variant={"link"}
                                onClick={() => {
                                    return router.replace("/dashboard");
                                }}
                                className="px-12 underline md:mt-4 md:px-16"
                            >
                                <span className="bg-foreground mr-4 h-5 w-5 rounded-full"></span>
                                Open dashboard
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
