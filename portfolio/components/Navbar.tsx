import React from 'react'
import Link from 'next/link'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='navbar'>


      <div className='center'>
        <div className='center navbar-name'>
          <h1 className='font-bold font-sans'>Robert Romero</h1>
        </div>
          
      </div>

      <div className=''>
        <Link className='navbar-text flex justify-self-end' href="/"><h3 className='font-sans font-medium'>SUMMARY</h3></Link>
      </div>

      <div className='center'>
        <Link className='navbar-text center' href="/projects"><h3 className='font-sans font-medium'>PROJECTS</h3></Link>
      </div>

      <div className=''>
        <Link className='navbar-text flex justify-self-start' href="/contact"><h3 className='font-sans font-medium '>CONTACT INFO</h3></Link>
      </div>

    </div>
  )
}

export default Navbar