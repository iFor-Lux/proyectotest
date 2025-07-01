import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LuxuryShop - Make luxury shopping regardless of your budget",
  description:
    "Beautiful, fast and modern luxury tech store for building accessible and customizable shopping experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
