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
