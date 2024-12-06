import Script from "next/script";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="max-w-7xl mx-auto">
        <Header />
        <main>{children}</main>
        <footer className="p-4 bg-gradient-to-r from-[#e9e8e5] to-[#dedbdb] text-gray-900 text-center text-sm">
          <p>&copy; 2024 Ryan Van Bussum </p> <p> All rights reserved</p>
          {/* <nav>
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="/" aria-label="About Us">
                  About
                </a>
              </li>
              <li>
                <a href="/" aria-label="Contact Us">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" aria-label="Privacy Policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav> */}
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
