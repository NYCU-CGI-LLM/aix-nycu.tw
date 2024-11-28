import type { Metadata } from "next"
import { Noto_Sans_TC } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProgressBar } from "@/components/transitions/progress-bar"

import "./globals.css"

const notoSansTC = Noto_Sans_TC({ 
  subsets: ["latin"],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: "數位教學工作小組 - 國立陽明交通大學",
  description: "運用AI創新，打造未來教育",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={notoSansTC.className}>
        <ProgressBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}