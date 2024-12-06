import React from 'react';
import { RichTextComponents } from '../RichTextComponents';
import { PortableText } from '@portabletext/react';

type Props = {
  contentData: ContentBox[];
}

const ContentBox = ( {contentData}: Props ) => {
  return (
    <div>
    {contentData.map(content => (
    <section className="bg-gray-900 text-white py-16 px-6 mt-10 mb-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-serif">{ content.title }</h2>
          <div>
            <PortableText value={content.description} components={RichTextComponents}/>
            <div className="mt-6 lg:mt-10 flex justify-center items-center">
                <a className="bg-white lg:px-8 px-4 py-3 mt-2 w-full rounded-full text-md font-bold text-black hover:bg-[#d4af37] hover:text-white" href="/author/#contact">Inquiries</a>
            </div>
          </div>
      </div>
    </section>
    ))}
    </div>
  );
};

export default ContentBox;