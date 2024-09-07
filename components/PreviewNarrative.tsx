"use client"

import {usePreview} from '../lib/sanity.preview'
import ContentBox from './NarrativeCartography/ContentBox';
import NarrativeBanner from './NarrativeCartography/NarrativeBanner';
import Testimonials from './NarrativeCartography/Testimonials';

type Props = {
    query: string;
}

export default function PreviewNarrative({ query }:
Props) {
    const contentData = usePreview(null, query);

    return <div>
        <NarrativeBanner/>
        <ContentBox contentData={contentData}/>
        <Testimonials/>
        </div>
}