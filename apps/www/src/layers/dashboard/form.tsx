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

import EditTextField from "@/components/dashboard/form/EditTextField";
import EditFormName from "@/components/dashboard/form/EditFormName";
import EditFormDescription from "@/components/dashboard/form/EditFormDescription";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { formDataStore } from "@/store/formData.store";
import { IFormData } from "@/types/form";
import { redirect, RedirectType, useRouter } from "next/navigation";
import FormHeader from "@/components/header/FormHeader";
import { Textarea } from "@/components/ui/textarea";
import FormInputType from "@/components/dashboard/form/FormInputType";
import LinksFooter from "@/components/footer/LinksFooter";
// import FormServe, { ICreateForm } from "@fill/core/form";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Loader } from "@/components/ui/loader";

const FormPage: React.FC = () => {
    const [formData] = useAtom<IFormData | null>(formDataStore);
    const [loading, setLoading] = useState<boolean>(false);
    const router: AppRouterInstance = useRouter();

    if (!formData) {
        return redirect("/dashboard");
    }

    const handleCreateForm = async () => {
        // Submit the form data
        if (!formData) return;
        setLoading(true);
        // const data: ICreateForm = {
        //     name: formData.formName!,
        //     description: formData.formDescription!,
        //     fields: formData.fields.toString(),
        //     user: "random",
        // };

        // const formServe = new FormServe();
        // let res = await formServe.createForm(data);
        // if (res.status) {
        //     return router.push("/dashboard");
        // }
        setLoading(false);
        return;
    };

    return (
        <div className="m-auto my-8 flex h-full w-full max-w-3xl flex-col gap-8">
            <FormHeader
                formName={formData.formName!}
                formDesc={formData.formDescription!}
            />
            <span className="float-right flex w-full items-center justify-end gap-4 max-md:flex-col max-md:items-end">
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
                                    label={field.fieldLabel!}
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
                                {field.fieldType !== "checkbox" ? (
                                    <Label
                                        htmlFor={field.fieldName!}
                                        className="mr-2"
                                    >
                                        {field.fieldLabel}
                                    </Label>
                                ) : (
                                    <></>
                                )}
                                {fieldComponent}
                            </div>
                            <EditTextField index={index} />
                        </div>
                    );
                })}
                <span className="flex items-center">
                    {loading && <Loader />}
                    <Button
                        type="submit"
                        className="px-8"
                        disabled={loading}
                        variant={"default"}
                        onClick={handleCreateForm}
                    >
                        Create form
                    </Button>
                </span>
            </form>
            <LinksFooter />
        </div>
    );
};

export default FormPage;
