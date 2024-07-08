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
 */ import Logo from "@/assets/logoJsxComponent/logo";
import React from "react";

const FormHeader = (props: { formName: string; formDesc: string }) => {
    return (
        <section className="bg-foreground/10 rounded-3xl p-12">
            <Logo className="" />
            <h1 className="mt-6 text-[2rem] tracking-tight">
                {props.formName}
            </h1>
            {/* <span className="block my-4 w-24 h-[1px] rounded-full bg-muted-foreground"></span> */}
            <p className="text-muted-foreground">{props.formDesc}</p>
        </section>
    );
};

export default FormHeader;
