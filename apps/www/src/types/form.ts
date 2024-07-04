export interface FormField {
    fieldName: string;
    fieldType: string;
    fieldPlaceholder: string;
    fieldLabel: string;
    required: boolean;
}

export interface IForm {
    formName: string;
    formDescription: string;
    fields: FormField[];
}
