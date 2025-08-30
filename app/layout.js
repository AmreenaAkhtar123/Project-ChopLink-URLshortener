import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navabr from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChopLink - Your trusted URL Shortener",
  description: "A ChopLink helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
		<Navabr/>
        {children}
		<Footer/>
      </body>
    </html>
  );
}
