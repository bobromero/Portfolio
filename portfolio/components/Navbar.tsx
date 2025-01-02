import React from 'react'
import Link from 'next/link'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='navbar grid grid-cols-4'>


      <div className='flex justify-center align-middle'>
        <div className='center'>
          <h1 className='font-bold font-sans'>Robert Romero</h1>
        </div>
          
      </div>

      <div className='flex justify-center align-middle'>
        <Link className='navbar-text center' href="/"><h3 className='font-sans font-semibold'>Summary</h3></Link>
      </div>

      <div className='flex justify-center align-middle'>
        <Link className='navbar-text center' href="/projects"><h3 className='font-sans font-semibold'>Projects</h3></Link>
      </div>

      <div className='flex justify-center align-middle'>
        <Link className='navbar-text center' href="/contact"><h3 className='font-sans font-semibold '>Contact Info</h3></Link>
      </div>

    </div>
  )
}

export default Navbar