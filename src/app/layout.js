import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: "RaNimeLIST - Temukan Referensi Anime",
  description: "Website referensi anime paling spektakuler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-dark antialiased text-color-primary`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
