import Navbar from "@/components/Navbar"
import "./globals.css"
import Contact from "@/components/Contact"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <body>
          <Navbar></Navbar>
          <main>{children}</main>
          <Contact></Contact>
        </body>
      </html>
    )
  }