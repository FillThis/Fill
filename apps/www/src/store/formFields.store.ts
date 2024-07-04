import { atom } from "jotai";
import { IForm } from "@/types/form";

const formFields: IForm = {
    formName: "Student form",
    formDescription:
        "the student for fsdfs dfsd fsdf sdfs dfs dfdfs fsdf df m vasdv sdvs dvsdv sdv sdvsdv sdvs dvsd vvsdv sdvsdvs vsdvv vv v sdvs vsdvsd vsvdv dvd vv dvsd v",
    fields: [
        {
            fieldName: "email",
            fieldType: "email",
            fieldPlaceholder: "Enter an email",
            fieldLabel: "Email",
            required: true,
        },
        {
            fieldName: "password",
            fieldType: "password",
            fieldPlaceholder: "Enter a password",
            fieldLabel: "Password",
            required: true,
        },
    ],
};

export const formFieldsStore = atom<IForm>(formFields);
