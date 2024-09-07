import {previewData} from "next/headers";
import {groq} from 'next-sanity'
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import Coffee from "../../components/Coffee";
import NarrativeBanner from "../../components/NarrativeCartography/NarrativeBanner";
import Testimonials from "../../components/NarrativeCartography/Testimonials";
import ContentBox from "../../components/NarrativeCartography/ContentBox";
import PreviewNarrative from "../../components/PreviewNarrative";

const query = groq`
*[_type=='contentBox'] {
    ...,
}
`;

export const revalidate = 30; //revalidate this page every 30 seconds

export default async function HomePage() {
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
                <PreviewNarrative query={query}/>
            </PreviewSuspense>
        );
    }

    const contentData = await client.fetch(query);
    console.log(contentData)

    return(
        <div>
        <NarrativeBanner/>
        <ContentBox contentData={contentData}/>
        {/* <Testimonials/> */}
        <Coffee/>
        </div>
    );
}