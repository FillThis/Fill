/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FieldRadioGroupProps {
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const FieldRadioGroup: React.FC<FieldRadioGroupProps> = ({
    name,
    label,
    value,
    onChange,
}) => (
    <div className="flex w-full items-center">
        <Label htmlFor={name} className="mr-8 shrink-0">
            {label}
        </Label>
        <div className="my-4 w-full">
            <RadioGroup
                value={value}
                onValueChange={onChange}
                className="flex w-full flex-col gap-4"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text" />
                    <Label htmlFor="text">Text</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="number" id="number" />
                    <Label htmlFor="number">Number</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <Label htmlFor="email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="password" id="password" />
                    <Label htmlFor="password">Password</Label>
                </div>
            </RadioGroup>
        </div>
    </div>
);

export default FieldRadioGroup;
