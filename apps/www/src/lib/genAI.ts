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
 */ import { IFormData } from "@/types/form.d";
import {
    GenerateContentResult,
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    GenerativeModel,
    GenerationConfig,
} from "@google/generative-ai";
import { PromptsDef } from "./actions/promptsDef";

export class GenAI {
    private _apiKey: string;
    private _model: GenerativeModel;
    private _client: GoogleGenerativeAI;

    private _generationConfig: GenerationConfig;

    constructor() {
        this._apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
        this._client = new GoogleGenerativeAI(this._apiKey!);

        // Defining configuration
        this._generationConfig = {
            temperature: 0.5,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
        };

        this._model = this._client.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: this._generationConfig,
        });
    }

    public async generateFormContent(
        prompt: string | undefined | null,
    ): Promise<IFormData | any | null | undefined> {
        if (!prompt) return;
        const parts: { text: string }[] = [
            //         {
            //             text: `{
            // formName: can be a reasonable form name,
            // formDescription: can be a form reasonable description,
            // fields: [
            //     {
            //         fieldName: can be a field name in lowercase,
            //         fieldType: can be a valid html input,
            //         fieldTag: can be a valid html element tag e.g. input, textarea,
            //         fieldPlaceholder: can be a placeholder or null,
            //         fieldLabel: can be a label name in Pascal case e.g Name, Email etc.,
            //         fieldOptions: can be an array of object for option like select tag, radio button, check box etc. or null [{
            //             value: can be a value of option or null
            //             label: can be a label of option in Pascal case or null
            //         }]
            //         required: field can be required or not in boolean true or false,
            //         },
            //         ],
            //     }`,
            //         },
            {
                text: `input: ${PromptsDef.formPromptDef(prompt)}`,
            },
            { text: "output: " },
        ];

        let res: GenerateContentResult = await this._model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig: this._generationConfig,
        });
        return JSON.parse(res.response.text()) as IFormData;
    }
}
