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

import { notFound } from "next/navigation";
import { allPages, Page } from "contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx-components";
import "@/styles/mdx.css";
import { Metadata } from "next";

// import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

interface PageProps {
    params: {
        slug: string[];
    };
}

async function getPageFromParams(params: any) {
    const slug = params?.slug?.join("/");
    const page = allPages.find((page: Page) => page.slugAsParams === slug);

    if (!page) {
        null;
    }

    return page;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const page = await getPageFromParams(params);

    if (!page) {
        return {};
    }

    const url = process.env.NEXT_PUBLIC_APP_URL;
    // const ogUrl = new URL(`${url}/api/og`);
    // ogUrl.searchParams.set("heading", page.title);
    // ogUrl.searchParams.set("type", siteConfig.name);
    // ogUrl.searchParams.set("mode", "light");

    return {
        title: page.title,
        description: page.description,
        openGraph: {
            title: page.title,
            description: page.description,
            type: "article",
            url: absoluteUrl(page.slug),
            // images: [
            //     {
            //         url: ogUrl.toString(),
            //         width: 1200,
            //         height: 630,
            //         alt: page.title,
            //     },
            // ],
        },
        // twitter: {
        //     card: "summary_large_image",
        //     title: page.title,
        //     description: page.description,
        //     images: [ogUrl.toString()],
        // },
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allPages.map((page: Page) => ({
        slug: page.slugAsParams.split("/"),
    }));
}

export default async function PagePage({ params }: PageProps) {
    const page = await getPageFromParams(params);

    if (!page) {
        notFound();
    }

    return (
        <article className="text-foreground container max-w-3xl py-6 lg:py-12">
            <div className="space-y-4">
                <h1 className="font-heading inline-block text-4xl lg:text-5xl">
                    {page.title}
                </h1>
                {page.description && (
                    <p className="text-muted-foreground text-xl">
                        {page.description}
                    </p>
                )}
            </div>
            <hr className="my-4" />
            <Mdx code={page.body.code} />
        </article>
    );
}
