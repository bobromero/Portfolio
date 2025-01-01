import React from 'react'
import Link from 'next/link'


type Props = {}

function Navbar({}: Props) {
  return (
    <div>
        <Link href="/"><h3>Summary</h3></Link>
        <Link href="/projects"><h3>Projects</h3></Link>
        <Link href="/"><h3>Contact Info</h3></Link>
    </div>
  )
}

export default Navbar