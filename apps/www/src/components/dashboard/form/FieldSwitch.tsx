/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
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
