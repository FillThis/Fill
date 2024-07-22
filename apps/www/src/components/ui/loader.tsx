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

export const Loader = () => {
    return (
        <span className="relative mx-6 flex items-center justify-center">
            <span className="bg-foreground absolute inline-flex h-5 w-5 animate-ping rounded-full"></span>
            <span className="bg-foreground relative inline-flex h-5 w-5 rounded-full"></span>
        </span>
    );
};
