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
import { PlusIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "@/components/ui/loader";
import { useAtom } from "jotai";
import { formDataStore } from "@/store/formData.store";
import { IFormData } from "@/types/form";
import { GenAI } from "@/lib/gen_ai";
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
                <DialogHeader>
                    <DialogTitle>Generate a form</DialogTitle>
                    <DialogDescription>
                        Write a specific subject to generate a customized form.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="name" className="text-left">
                            Subject
                        </Label>
                        <Textarea
                            id="name"
                            value={value || ""}
                            onChange={handleValueChange}
                            placeholder="e.g. Generate a form for student trip in Gujarat."
                        />
                    </div>
                </div>
                <DialogFooter className="flex items-center">
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
