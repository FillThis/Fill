import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FieldInputProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const FieldInput: React.FC<FieldInputProps> = ({
    id,
    name,
    label,
    value,
    onChange,
    placeholder = "",
}) => (
    <>
        <Label htmlFor={id}>{label}</Label>
        <Input
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="col-span-3 mr-2"
        />
    </>
);

export default FieldInput;
