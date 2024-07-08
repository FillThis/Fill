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
        ${exRes}`;
    }
}
