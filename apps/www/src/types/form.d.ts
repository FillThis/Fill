import { HTMLInputTypeAttribute } from "react";

export interface FormOption {
    value: string | null;
    label: string | null;
}

export interface FormField {
    fieldTag: string | null;
    fieldName: string | null;
    fieldType: HTMLInputTypeAttribute | null;
    fieldPlaceholder: string | null;
    fieldOptions: FormOption[] | null;
    fieldLabel: string | null;
    required: boolean;
}

export interface IFormData {
    formName: string | null;
    formDescription: string | null;
    fields: FormField[];
}
