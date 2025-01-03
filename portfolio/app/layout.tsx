import Navbar from "@/components/Navbar"
import "./globals.css"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <Navbar></Navbar>
          <main>{children}</main>
        </body>
      </html>
    )
  }