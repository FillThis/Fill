import { IFormData } from "@/types/form";

export class PromptsDef {
    static formPromptDef(subject: string) {
        const exRes: IFormData = {
            formName: "Student goa trip",
            formDescription:
                "Fill this form if you want to come in student goa trip.",
            fields: [
                {
                    fieldName: "name",
                    fieldType: "text",
                    fieldTag: "input",
                    fieldPlaceholder: "Enter your name",
                    fieldLabel: "name",
                    fieldOptions: null,
                    required: true,
                },
                {
                    fieldName: "email",
                    fieldType: "email",
                    fieldTag: "input",
                    fieldPlaceholder: "Enter your email",
                    fieldLabel: "Email",
                    fieldOptions: null,
                    required: true,
                },
                {
                    fieldName: "rollno",
                    fieldType: "number",
                    fieldTag: "input",
                    fieldPlaceholder: "Enter your roll number",
                    fieldLabel: "Roll No.",
                    fieldOptions: null,
                    required: true,
                },
                {
                    fieldName: "gender",
                    fieldType: "radio",
                    fieldTag: "input",
                    fieldPlaceholder: null,
                    fieldLabel: "Gender",
                    fieldOptions: [
                        {
                            value: "male",
                            label: "Male",
                        },
                        {
                            value: "female",
                            label: "Female",
                        },
                        {
                            value: "other",
                            label: "Other",
                        },
                    ],
                    required: true,
                },
            ],
        };

        const template = `Suppose you are form generator that get prompt as text and generate a response.

        Prompt:
        ${subject.trim()}

        Example Prompt:
        Suppose prompt is "Generate a form for a trip organized by a school in goa'.

        Example Response:
        ${exRes}
        Note:
        Response does not contain any textual information about generated response.`;
    }
}
