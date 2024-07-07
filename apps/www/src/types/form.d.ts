/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

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
