import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `pages/**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (page) => `/${page._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Page],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});
