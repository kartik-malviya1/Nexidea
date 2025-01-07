import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nexidea",
  description: "Generate project ideas based on your skills and experience",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} antialiased min-h-[calc(100vh-1px)] flex flex-col scroll-smooth`}
        >
          <main className="relative flex-1 flex flex-col">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
