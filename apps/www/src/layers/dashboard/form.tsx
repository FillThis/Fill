"use client";

import EditTextField from "@/components/dashboard/EditTextField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAtom } from "jotai";
import { formFieldsStore } from "@/store/formFields.store";

interface FormValues {
    email: string;
    password: string;
}

const FormPage: React.FC = () => {
    const [formData] = useAtom(formFieldsStore);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <div className="m-auto flex h-full w-full max-w-4xl flex-col gap-8">
            <section className="bg-foreground/10 rounded-2xl p-12">
                <h1 className="text-[2rem]">{formData.formName}</h1>
                {/* <span className="block my-4 w-24 h-[1px] rounded-full bg-muted-foreground"></span> */}
                <p className="text-muted-foreground mt-2">
                    {formData.formDescription}
                </p>
            </section>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col items-end gap-8"
            >
                {formData.fields.map((field, index) => (
                    <div
                        key={index}
                        className="bg-foreground/5 flex w-full items-center gap-4 rounded-xl p-4"
                    >
                        <div className="flex w-full flex-col gap-4">
                            <Label htmlFor={field.fieldName} className="mr-2">
                                {field.fieldLabel}
                            </Label>
                            <Input
                                id={field.fieldName}
                                type={field.fieldType}
                                placeholder={field.fieldPlaceholder}
                                {...register(
                                    field.fieldName as keyof FormValues,
                                    {
                                        required: field.required,
                                    },
                                )}
                                className="mr-2"
                            />
                            {errors[field.fieldName as keyof FormValues] && (
                                <span className="mr-2">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <EditTextField index={index} />
                    </div>
                ))}
                <Button type="submit" className="px-8" variant={"default"}>
                    Create form
                </Button>
            </form>
        </div>
    );
};

export default FormPage;
