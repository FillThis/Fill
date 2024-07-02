import { allPages, Page } from "contentlayer/generated";

export const generateStaticParams = async () =>
    allPages.map((page) => ({ slug: page.url }));

export default function Pager({ params }: { params: { slug: string } }) {
    const page = allPages.find((page: Page) => {
        console.log(page.url);
        return page.url.toString() === `/pages/${params.slug}`;
    });
    // if (!page) throw new Error(`Page not found for slug: ${params.slug}`);

    return (
        <div>
            <h1 className="text-[2rem]">{page && page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page?.body.html || "" }} />
        </div>
    );
}
