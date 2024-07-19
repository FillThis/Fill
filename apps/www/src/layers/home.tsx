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
import { ChevronRightIcon } from "lucide-react";

const Home = () => {
    const [pathToNavigate, setPathToNavigate] = useState<string>("/login");
    const [subject, setSubject] = useState<string>("");
    const router: AppRouterInstance = useRouter();

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

    return (
        <>
            <main className="m-auto mb-8 flex h-full w-full flex-auto flex-col">
                <div
                    id="subject_action"
                    className="h-with-nav flex flex-auto flex-col justify-center gap-y-4 md:gap-y-10"
                >
                    <h1 className="text-foreground text-4xl font-medium tracking-tighter md:text-[5rem] md:leading-[1.12]">
                        Generate now...
                    </h1>
                    <p className="text-muted-foreground">
                        Enter your purpose to generate a form into below box and
                        generate form quickly.
                    </p>
                    <div className="mt-8 flex w-full flex-col items-end justify-center gap-y-0 md:flex-row">
                        <Textarea
                            value={subject}
                            onChange={handleSubjectChange}
                            autoFocus
                            placeholder="Enter your form subject here..."
                            className="focus:bg-foreground/5 border-foreground h-24 resize-none rounded-br-none"
                        />
                        <Button
                            className="rounded-tr-none px-6"
                            disabled={subject.length === 0}
                        >
                            Generate
                            <ChevronRightIcon size={20} className="ml-1" />
                        </Button>
                    </div>
                </div>
                <div
                    id="intro"
                    className="flex h-dvh flex-auto flex-col items-center justify-center gap-y-8 md:gap-y-10"
                >
                    <h1 className="text-foreground text-center text-4xl font-medium tracking-tighter md:text-[5rem] md:leading-[1.12]">
                        An ai form generator
                    </h1>
                    <p className="text-muted-foreground w-[90%] max-w-4xl text-center text-base font-normal leading-8">
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
                            className="px-12 md:mt-4 md:px-16"
                        >
                            Open dashboard{" "}
                        </Button>
                    </div>
                </div>
                <LinksFooter />
            </main>
        </>
    );
};

export default Home;
