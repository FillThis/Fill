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
 */ "use client";

import EditTextField from "@/components/dashboard/form/EditTextField";
import EditFormName from "@/components/dashboard/form/EditFormName";
import EditFormDescription from "@/components/dashboard/form/EditFormDescription";
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
import { Edit2Icon } from "lucide-react";
import FormInputType from "@/components/dashboard/form/FormInputType";

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
            <span className="float-right flex w-full items-center justify-end gap-4">
                <EditFormName />
                <EditFormDescription />
            </span>
            <hr></hr>
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
                        default:
                            fieldComponent = (
                                <FormInputType
                                    name={field.fieldName!}
                                    type={field.fieldType!}
                                    placeholder={field.fieldPlaceholder!}
                                    className="mr-4"
                                    options={field.fieldOptions!}
                                />
                            );
                            break;
                    }

                    return (
                        <div
                            key={index}
                            className="bg-foreground/5 flex w-full items-center gap-12 rounded-xl p-4"
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
