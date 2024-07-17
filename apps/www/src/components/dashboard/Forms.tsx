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

import React from "react";
import CreateForm from "./CreateForm";
import GeneratedFormItem from "./GeneratedFormItem";

const Forms = () => {
    const handlNewFormCreation = () => {};

    return (
        <div className="flex flex-col gap-4 md:p-8">
            <h1 className="text-4xl font-normal leading-8 tracking-tight">
                Forms
            </h1>
            {/* Create form section */}
            <p className="text-foreground/50">
                A list of generated forms by you.
            </p>
            <hr />
            {/* Generated form information */}
            <div className="border-muted-foreground my-4 flex items-center justify-between rounded-full border p-2 pl-8">
                <span className="font-mono font-normal">
                    {"1 / 3"}
                    {"  "}&#9679;{"  "}
                    <span className="text-muted-foreground font-sans">
                        Form generated
                    </span>
                </span>
                <CreateForm />
            </div>
            <span className="text-xl">Generated Forms</span>
            <hr />
            {/* Generated form list */}
            <GeneratedFormItem />
        </div>
    );
};

export default Forms;
