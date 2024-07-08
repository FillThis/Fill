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
 */ import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `pages/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
        },
        slugAsParams: {
            type: "string",
            resolve: (doc: any) =>
                doc._raw.flattenedPath.split("/").slice(1).join("/"),
        },
        url: {
            type: "string",
            resolve: (page) => `/${page._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Page],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode as any,
                {
                    theme: "github-dark",
                    onVisitLine(node: any) {
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node: any) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node: any) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
});
