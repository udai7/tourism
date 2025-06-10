import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tripura Tourism",
  description: "One-Stop Digital Travel App for Tripura Tourism",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="relative max-w-[375px] w-full h-[812px] bg-white rounded-[60px] shadow-xl overflow-hidden border-8 border-gray-800">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
              <div className="h-full overflow-y-auto pb-20">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
