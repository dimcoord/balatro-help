import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Balatro Helper</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed w-screen max-h-[20vh] bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <span className="text-white text-xl ml-2 md:block hidden">
                   <Link href="/">Balatro Helper</Link>
                </span>
                <span className="text-white text-xl ml-2 md:hidden block">
                    <Link href="/">Balatro</Link>
                 </span>
            </div>
            <div>
                <a href="https://github.com/dimcoord/GithubAccountStats/"
                target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded ml-2 hover:bg-blue-500">
                    Contribute
                </a>
            </div>
        </div>
    </nav>
        {children}
      </body>
    </html>
  );
}
