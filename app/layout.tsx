import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BugTracker AI - Intelligent Bug Reporting Platform",
  description: "AI-powered bug reporting platform with automated categorization, prioritization, and CI/CD integration",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
