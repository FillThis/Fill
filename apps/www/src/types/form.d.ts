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
 */ import { HTMLInputTypeAttribute } from "react";

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
