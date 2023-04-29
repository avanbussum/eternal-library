import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import urlFor from '../lib/urlFor';

type Props = {
  quotes: Quote[];
}

function Hero({quotes}: Props) {
  return (
    <div>
    {quotes.map(quote => (
    <div className="flex flex-row bg-white h-fit my-10 md:h-80 mx-10">
      <div className="flex items-center justify-center text-center lg:text-left lg:w-1/2">
        <div className="flex items-center justify-center" key={quote._id}>
          <h3 className="text-xl md:text-2xl lg:text-2xl italic font-semibold text-gray-900">
            {quote.description} <br/><br/>
            {quote.title}
          </h3>          
        </div>
      </div>
      <div className="hidden w-full relative lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        <Image className="h-full object-cover" src={urlFor(quote.image).url()} alt={quote.title} fill/>
      </div>
    </div>
    ))}
    </div>
  )
}

export default Hero