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
import { Switch } from "@/components/ui/switch";

interface FieldSwitchProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const FieldSwitch: React.FC<FieldSwitchProps> = ({
    label,
    checked,
    onChange,
}) => (
    <div className="flex items-center gap-4">
        <Switch checked={checked} onCheckedChange={onChange} />
        <Label htmlFor="required">{label}</Label>
    </div>
);

export default FieldSwitch;
