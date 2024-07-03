"use client";

import React from "react";
import CreateForm from "./CreateForm";
import GeneratedFormItem from "./GeneratedFormItem";

const Forms = () => {
    const handlNewFormCreation = () => {};

    return (
        <div className="flex flex-col gap-4 p-8">
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
