import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import AnimatedBackground from "@/components/animated-background"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NK Elevators - Professional Elevator Services",
  description:
    "Providing all kinds of elevator services with expertise and reliability. Installation, maintenance, and repair.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        <AnimatedBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
