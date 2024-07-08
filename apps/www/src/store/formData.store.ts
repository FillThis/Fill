import { atom } from "jotai";
import { IFormData } from "../types/form.d";

// /*
const formFields: IFormData = {
    formName: "v",
    formDescription: "v",
    fields: [
        {
            fieldName: "v",
            fieldType: "text",
            fieldTag: "v",
            fieldPlaceholder: "v",
            fieldLabel: "v",
            fieldOptions: [
                {
                    value: "v",
                    label: "v",
                },
            ],
            required: true,
        },
    ],
};
// */

export const formDataStore = atom<IFormData | null>(formFields);
