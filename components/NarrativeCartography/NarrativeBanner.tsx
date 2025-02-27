import Link from "next/link"

function NarrativeBanner() {
  return (
    <div>
    <div className="h-[26rem]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    
        <div className="flex items-center justify-center">
            <div className="mt-12 lg:mt-28 flex flex-col text-center lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-3">
                <div className="text-white" >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">Narrative Cartography</h1>
                    <h2 className="mt-5 font-serif md:mt-3">
                        Where Are {" "} <span className="italic">You</span>{" "} in the Story of Your Life?
                    </h2>
                    <h4 className="text-[#ffecb1] font-serif mt-2">
                        Writing | Philosophy | Magic
                    </h4>
                    <div className="flex justify-center items-center gap-4">
                        <div className="mt-6 lg:mt-10 flex justify-center items-center">
                            <a className="bg-white lg:px-8 px-4 py-3 rounded-full text-md font-bold text-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 hover:text-white" href="/author/#contact">Inquiries</a>
                        </div>
                        <div className="mt-6 lg:mt-10 flex justify-center items-center">
                            <Link href="https://forms.gle/BSkvPWChVwGLPXSN6" target="_blank" className="bg-white lg:px-8 px-4 py-3 rounded-full text-md font-bold text-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 hover:text-white">Leave a Review</Link> 
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