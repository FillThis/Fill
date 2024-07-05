import { atom } from "jotai";
import { IFormData } from "../types/form.d";

const formFields: IFormData = {
    formName: null,
    formDescription: null,
    fields: [
        {
            fieldName: null,
            fieldType: null,
            fieldTag: null,
            fieldPlaceholder: null,
            fieldLabel: null,
            fieldOptions: null,
            required: false,
        },
    ],
};

export const formDataStore = atom<IFormData>(formFields);
