import Link from "next/link"

function NarrativeBanner() {
  return (
    <div>
    <div className="h-[26rem] lg:h-[36rem] " style={{backgroundImage: `url('https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    
        <div className="flex items-center justify-center">
            <div className="mt-12 lg:mt-28 flex flex-col text-center lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-3">
                <div className="text-white" >
                    <h1 className="text-6xl lg:text-7xl font-serif">Narrative Cartography</h1>
                    <h2 className="mt-5 font-serif md:mt-3">
                        Where Are You in the Story of Your {" "}
                        <span className="italic">
                            Life?
                        </span>{" "}
                    </h2>
                    <h4 className="text-[#c4c3c0] font-serif mt-2">
                        Writing | Philosophy | Magic
                    </h4>
                    <div className="flex justify-center items-center gap-4">
                        <div className="mt-6 lg:mt-10 flex justify-center items-center">
                            <a className="bg-white lg:px-8 px-4 py-3 rounded-full text-md font-bold text-black hover:bg-[#d4af37] hover:text-white" href="/author/#contact">Inquiries</a>
                        </div>
                        <div className="mt-6 lg:mt-10 flex justify-center items-center">
                            <Link href="https://forms.gle/BSkvPWChVwGLPXSN6" className="bg-white lg:px-8 px-4 py-3 rounded-full text-md font-bold text-black hover:bg-[#d4af37] hover:text-white">Leave a Review</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </div>
  )
}

export default NarrativeBanner