import Link from "next/link"

function Coffee() {
  return (
        <div className="flex justify-center items-center mt-10">
            <Link href="https://www.buymeacoffee.com/ryanvb"
                className="bg-[#d4af37] lg:px-32 px-12 py-3 rounded-full text-lg font-bold 
                text-white hover:bg-[#a5882b]">
                  Coffee? ☕
              </Link> 

        </div>
  )
}

export default Coffee