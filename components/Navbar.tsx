import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-name'>
                <h3 className='font-bold font-sans navbar-name-text'>Robert Romero</h3>
            </div>
            <nav className='navbar'>
                <div className='middle flex justify-end'>
                    <Link className='navbar-text' href="/"><h3 className='p-1'>Summary</h3></Link>
                </div>

                <div className='middle flex justify-center'>
                    <Link className='navbar-text' href="/projects"><h3 className='p-1'>Projects</h3></Link>
                </div>

                <div className='middle flex justify-start'>
                    <Link className='navbar-text' href="/blog"><h3 className='p-1'>Blog</h3></Link>
                </div>

            </nav>






        </div>
    )
}

export default Navbar
