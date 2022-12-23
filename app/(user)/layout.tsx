import Banner from "../../components/Banner"
import Header from "../../components/Header"
import"../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header/>
        <Banner/>
        <hr className="border-[#d4af37] border-2 mb-6"/>
        {children}
      </body>
    </html>
  )
}
