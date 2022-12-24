
function Banner() {
  return (
    <div className="mx-10" style={{backgroundImage: `url('https://images.unsplash.com/photo-1516054719048-38394ee6cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`}}>
        <div className="h-full bg-black opacity-25"></div>

        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-3 mb-6">
            <div className="text-[#e9e8e5]" >
                <h1 className="text-7xl font-serif">Eternal Library</h1>
                <h2 className="mt-5 font-serif md:mt-3">
                    Short Stories from the {" "}
                    <span className="underline decoration-2 decoration-[#d4af37]">
                        Mindscape
                    </span>{" "}
                </h2>
            </div>

            <h4 className="mt-5 md:mt-2 text-[#c4c3c0] font-serif max-w-sm">
                Writing | Philosophy | Science
            </h4>
        </div>
    </div>
  )
}

export default Banner