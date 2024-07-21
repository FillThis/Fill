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

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AddSharp as PlusIcon } from "@mui/icons-material";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "@/components/ui/loader";
import { useAtom } from "jotai";
import { formDataStore } from "@/store/formData.store";
import { IFormData } from "@/types/form";
import { GenAI } from "@/lib/genAI";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const CreateForm = () => {
    const [value, setValue] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useAtom(formDataStore);
    const router: AppRouterInstance = useRouter();

    const handleValueChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setValue(e.target.value);
        return;
    };

    const handleOnClick = async () => {
        if (!value) return;
        setLoading(true);

        // Generate form using gen_ai
        const genAI = new GenAI();
        let res = await genAI.generateFormContent(value.trim());

        // Write in store
        await setFormData(res);
        setLoading(false);
        return router.push("dashboard/form");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon className="mr-2" /> Create new
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader className="text-left">
                    <DialogTitle>Generate a form</DialogTitle>
                    <DialogDescription>
                        Write a specific subject to generate a customized form.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex w-full flex-col gap-4 py-4">
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="name" className="text-left">
                            Subject
                        </Label>
                        <Textarea
                            id="name"
                            value={value || ""}
                            onChange={handleValueChange}
                            className="w-full"
                            placeholder="e.g. Generate a form for student trip in Gujarat."
                        />
                    </div>
                </div>
                <DialogFooter className="flex flex-row items-center justify-end">
                    {loading && <Loader />}
                    <Button
                        type="submit"
                        disabled={!value || loading}
                        onClick={handleOnClick}
                    >
                        Generate form
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreateForm;
