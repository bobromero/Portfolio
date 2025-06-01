import React from 'react'
import Link from 'next/link'
import '../css/navbar.css'

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-name'>
                    <h3 className='navbar-text'>Robert Romero</h3>
                </div>
                <div id='l'>
                    <Link href="/">
                        <h3 className='navbar-text'>Summary</h3>
                    </Link>
                </div>

                <div id='c'>
                    <Link href="/projects">
                        <h3 className='navbar-text'>Projects</h3>
                    </Link>
                </div>

                <div id='r'>
                    <Link href="/blog">
                        <h3 className='navbar-text'>Blog</h3>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Navbar
