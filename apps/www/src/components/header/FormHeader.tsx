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

import Logo from "@/assets/logoJsxComponent/logo";
import React from "react";

const FormHeader = (props: { formName: string; formDesc: string }) => {
    return (
        <section className="bg-foreground/10 flex flex-col items-start gap-4 rounded-3xl p-8 md:flex-row md:items-center md:gap-10 md:p-12">
            <div className="bg-foreground/10 rounded-xl p-4 md:p-6">
                <Logo />
            </div>
            <span className="bg-muted-foreground hidden h-[1px] w-20 rounded-full md:block md:h-20 md:w-[1px]"></span>
            <div className="w-full">
                <h1 className="text-[2rem] tracking-tight">{props.formName}</h1>
                <p className="text-muted-foreground">{props.formDesc}</p>
            </div>
        </section>
    );
};

export default FormHeader;
