
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-3 mb-6">
        <div>
            <h1 className="text-7xl font-serif">Eternal Library</h1>
            <h2 className="mt-5 md:mt-3">
                Short Stories from the {" "}
                <span className="underline decoration-2 decoration-[#d4af37]">
                    Mindscape
                </span>{" "}
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-[#565656] max-w-sm">
            New short stories | The latest in philosophy | Weekly spellcasting & More!
        </p>
    </div>
  )
}

export default Banner