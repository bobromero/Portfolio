import Navbar from "@/components/Navbar"
import "./globals.css"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <Navbar></Navbar>
          <main>{children}</main>
        </body>
      </html>
    )
  }