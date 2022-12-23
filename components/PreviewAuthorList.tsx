"use client"

import {usePreview} from '../lib/sanity.preview'
import AuthorList from "./AuthorList"

type Props = {
    query: string;
}

export default function PreviewAuthorList({ query }:
Props) {
    const authors = usePreview(null, query);

    return <div><AuthorList authors={authors} /></div>;
}