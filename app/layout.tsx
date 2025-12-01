import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Take Notes",
  description: "A simple and elegant note-taking app to organize your thoughts and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en" className={` ${interFont.variable} antialiased`}>
        <body
          
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
