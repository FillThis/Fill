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

import Header from "@/components/header/Header";
import React from "react";
import Footer from "@/components/footer/Footer";

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="flex h-full w-full flex-auto flex-col px-8 max-md:bg-[radial-gradient(25%_8%_at_100%_5%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] md:bg-[radial-gradient(10%_10%_at_100%_10%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)]">
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
