import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "TakeNotes",
  description: "Um website simples e intuitivo para guardar suas ideias e inspirações.",
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
