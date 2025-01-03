import React from 'react'
import Link from 'next/link'

type Props = {}

function Navbar({}: Props) {
  return (
    <div>
      <div className='center navbar-name'>
        <h1 className='font-bold font-sans'>Robert Romero</h1>
      </div>
      <nav className='navbar'>
          <div className='middle flex justify-end'>
            <Link className='navbar-text' href="/"><h3 className='p-1'>SUMMARY</h3></Link>
          </div>

          <div className='center '>
            <Link className='navbar-text' href="/projects"><h3 className='p-1'>PROJECTS</h3></Link>
          </div>

          <div className='middle'>
            <Link className='navbar-text' href="/contact"><h3 className='p-1'>CONTACT INFO</h3></Link>
          </div>

      </nav>

      

      


    </div>
  )
}

export default Navbar