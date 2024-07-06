"use client";

import EditTextField from "@/components/dashboard/EditTextField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useAtom } from "jotai";
import { formDataStore } from "@/store/formData.store";
import { IFormData } from "@/types/form";
import { redirect, RedirectType } from "next/navigation";
import FormHeader from "@/components/header/FormHeader";
import { Textarea } from "@/components/ui/textarea";

interface FormValues {
    email: string;
    password: string;
}

const FormPage: React.FC = () => {
    const [formData] = useAtom<IFormData | null>(formDataStore);
    if (!formData) {
        return redirect("/dashboard");
    }

    return (
        <div className="m-auto flex h-full w-full max-w-4xl flex-col gap-8">
            <FormHeader
                formName={formData.formName!}
                formDesc={formData.formDescription!}
            />
            <form className="flex w-full flex-col items-end gap-8">
                {formData.fields.map((field, index) => {
                    let fieldComponent;

                    switch (field.fieldTag!.toLowerCase()) {
                        case "textarea":
                            fieldComponent = (
                                <Textarea
                                    id={field.fieldName!}
                                    placeholder={field.fieldPlaceholder!}
                                    className="mr-4"
                                />
                            );
                            break;
                        case "select":
                            fieldComponent = (
                                <select
                                    id={field.fieldName!}
                                    className="mr-4"
                                ></select>
                            );
                            break;
                        default:
                            fieldComponent = (
                                <Input
                                    id={field.fieldName!}
                                    type={field.fieldType!}
                                    placeholder={field.fieldPlaceholder!}
                                    className="mr-4"
                                />
                            );
                            break;
                    }

                    return (
                        <div
                            key={index}
                            className="bg-foreground/5 flex w-full items-center gap-4 rounded-xl p-4"
                        >
                            <div className="flex w-full flex-col gap-4">
                                <Label
                                    htmlFor={field.fieldName!}
                                    className="mr-2"
                                >
                                    {field.fieldLabel}
                                </Label>
                                {fieldComponent}
                            </div>
                            <EditTextField index={index} />
                        </div>
                    );
                })}
                <Button type="submit" className="px-8" variant={"default"}>
                    Create form
                </Button>
            </form>
        </div>
    );
};

export default FormPage;
