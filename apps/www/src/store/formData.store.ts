/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

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
