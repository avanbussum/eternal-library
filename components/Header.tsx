import Image from "next/image"
import Link from "next/link"
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 mb-4 w-full bg-gradient-to-r from-[#e9e8e5] to-[#dedbdb]">
        <div>
            <Link href="/">
                <Image
                    className="rounded-full"
                    height={55}
                    width={55}
                    src="/images/feather-removebg-preview.png"
                    alt="logo"
                />
            </Link>
        </div>

        <div>
            <Link 
                href="/author"
                className="px-5 py-3 text-sm md:text-base text-[#302c1f] flex items-center rounded-full text-center hover:bg-gray-900 hover:text-[#d4af37]"
            >
                Ryan Van Bussum
            </Link>
        </div>

        <div>
            <Link 
                href="/"
                className="px-5 py-3 text-sm md:text-base text-[#302c1f] flex items-center rounded-full text-center hover:bg-gray-900 hover:text-[#d4af37]"
            >
                Sign up for My Newsletter
            </Link>
        </div> 
    </header>
  )
}

export default Header