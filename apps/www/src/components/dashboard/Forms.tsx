"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, PlusIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
            <div className="border-muted-foreground my-4 flex items-center justify-between rounded-full border p-2 pl-8">
                <span className="font-mono font-normal">
                    {"0 / 3"}
                    {"  "}&#9679;{"  "}
                    <span className="text-muted-foreground font-sans">
                        Form generated
                    </span>
                </span>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusIcon className="mr-2"></PlusIcon>Create new
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                            <DialogTitle>Generate a form</DialogTitle>
                            <DialogDescription>
                                Write a specific subject for generate a
                                customized form.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex flex-col gap-4">
                                <Label htmlFor="name" className="text-left">
                                    Subject
                                </Label>
                                <Textarea
                                    id="name"
                                    placeholder="e.g. Generate a form for student trip in Gujarat."
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <span className="text-xl">Generated Forms</span>
            <hr />
            <div className="border-muted hover:bg-foreground/10 flex w-full flex-col gap-2 rounded-xl border p-4 transition">
                <span className="font-medium">Student trip</span>
                <p className="text-muted-foreground">
                    Fill out all details with mandatory fields and submit it
                </p>
            </div>
        </div>
    );
};

export default Forms;
