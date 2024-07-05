import { IFormData } from "@/types/form";
import {
    GenerateContentResult,
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    GenerativeModel,
    GenerationConfig,
} from "@google/generative-ai";

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
            temperature: 1,
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

    public async generateContent(
        prompt: string | undefined | null,
    ): Promise<IFormData | any | null | undefined> {
        if (!prompt) return;

        const parts: { text: string }[] = [
            {
                text: "interface FormOption {    value: string | null;    label: string | null;}export interface FormField {    fieldTag: string | null    fieldName: string | null;    fieldType: HTMLInputTypeAttribute | null;    fieldPlaceholder: string | null;    fieldOptions: FormOption[] | null;    fieldLabel: string | null;    required: boolean;}export interface IFormData {    formName: string | null;    formDescription: string | null;    fields: FormField[];}",
            },
            { text: "input: " },
            { text: "output: " },
        ];

        let res: GenerateContentResult = await this._model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig: this._generationConfig,
        });
        return JSON.parse(res.response.text()) as IFormData;
    }
}
