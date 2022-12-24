import {previewData} from "next/headers";
import {groq} from 'next-sanity'
import PreviewSuspense from "../../../components/PreviewSuspense";
import { client } from "../../../lib/sanity.client";
import AuthorList from "../../../components/AuthorList";
import PreviewAuthorList from "../../../components/PreviewAuthorList";


const query = groq`
*[_type=='author'] {
    ...,
}
`;

export const revalidate = 30; //revalidate this page every 30 seconds

export default async function AboutPage() {
    if(previewData()) {
        return (
            <PreviewSuspense
                fallback = {
                    <div role="status">
                        <p className="text-center text-lg animate-pulse text-[#30106b]">
                            Loading Preview Data...
                        </p>
                    </div>
                }
            >
                <PreviewAuthorList query={query}/>
            </PreviewSuspense>
        );
    }

    const authors = await client.fetch(query);
    console.log(authors)
    return(
        <div>
            <AuthorList authors={authors}/>
        </div>
    );
}