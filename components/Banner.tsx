import Link from "next/link"

function Banner() {
  return (
    <div>
         
    <div className="h-[26rem] lg:h-[36rem] " style={{backgroundImage: `url('https://images.unsplash.com/photo-1516054719048-38394ee6cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`}}>
    
        <div className="flex items-center justify-center">
            <div className="mt-10 lg:mt-28 flex flex-col text-center lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-3">
                <div className="text-white" >
                    <h1 className="text-7xl font-serif">Eternal Library</h1>
                    <h2 className="mt-5 font-serif md:mt-3">
                        Short Stories from the {" "}
                        <span className="underline decoration-2 decoration-[#d4af37]">
                            Mindscape
                        </span>{" "}
                    </h2>
                    <h4 className="text-[#c4c3c0] font-serif mt-2">
                        Writing | Philosophy | Science
                    </h4>
                    <div className="mt-8 lg:mt-10 flex justify-center items-center">
            <Link href="/author" className="bg-white px-8 py-3 rounded-full text-md font-bold text-black hover:bg-[#d4af37] hover:text-white">The Author</Link> 
        </div>
                </div>
            </div>
        </div>
    </div>
   
    </div>
  )
}

export default Banner