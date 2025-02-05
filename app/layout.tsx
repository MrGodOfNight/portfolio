import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/app/_components/Header"
import Footer from "@/app/_components/Footer"
import { LanguageProvider } from "@/app/_contexts/LanguageContext"
import type React from "react"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "My Portfolio",
  description: "My personal portfolio and resume",
  icons: {
    icon: "/data/images/icons8-resume-100.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 relative z-10">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

