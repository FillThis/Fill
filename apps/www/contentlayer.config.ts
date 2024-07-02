import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `pages/**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        url: { type: "string", required: true },
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
