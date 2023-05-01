import Banner from "../../components/Banner"
import Header from "../../components/Header"
import"../../styles/globals.css"
import Coffee from "../../components/Coffee";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header/>
        <Coffee/>

        {children}
      </body>
    </html>
  )
}