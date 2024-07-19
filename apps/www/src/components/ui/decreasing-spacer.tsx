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

import React from "react";

const DecreasingSpacer = () => {
    return (
        <>
            <span className="bg-foreground mx-auto mt-8 h-[4px] w-full"></span>
            <span className="bg-foreground mx-auto mt-4 h-[3px] w-full"></span>
            <span className="bg-foreground mx-auto mt-4 h-[2px] w-full"></span>
            <span className="bg-foreground mx-auto mt-4 h-[1px] w-full"></span>
        </>
    );
};

export default DecreasingSpacer;
