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
 */ import React, { HTMLInputTypeAttribute } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormOption } from "@/types/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

interface FormInputTypeProps {
    className?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute | string;
    name?: string;
    options?: FormOption[];
}

const FormInputType: React.FC<FormInputTypeProps> = ({
    className,
    type,
    name,
    placeholder,
    options,
}) => {
    switch (type) {
        case "radio":
            return (
                <RadioGroup className="my-2 flex flex-col gap-4">
                    {options &&
                        options.map((option, index) => (
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value={option.value!}
                                    id={index.toString()}
                                />
                                <Label htmlFor={index.toString()}>
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                </RadioGroup>
            );
            break;
        case "select":
            return (
                <Select>
                    <SelectTrigger className="w-full bg-transparent">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Options</SelectLabel>
                            {options &&
                                options.map((option, index) => (
                                    <SelectItem value={option.value!}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            );
            break;
        case "checkbox":
            return (
                <div className="flex items-center gap-x-2">
                    <Checkbox id={name} />
                    <label
                        htmlFor={name}
                        className="cursor-pointer text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {placeholder}
                    </label>
                </div>
            );
            break;
        default:
            return (
                <Input
                    className={cn(className)}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                ></Input>
            );
            break;
    }
};

export default FormInputType;
