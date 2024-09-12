import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  "./globals.css";
import Headers from '../components/header'
import SearchBar from '../components/SearchBar'
import Catologs from '../components/catalogs'
import ImageSlider from '../components/imageSlider'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-1440px">
      <body className={inter.className}>
        <Headers/>
        <SearchBar/>
        <ImageSlider/>
        <Catologs/>
      

        {children}
      </body>
    </html>
  );
}


