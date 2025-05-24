import React from 'react'
import Link from 'next/link'


function Post1() {
    return (
        <div className="post">
            <Link className='navbar-text' href="/projects">
                <h1>First blog post!</h1>
                <p>This is my first blog post!</p>


            </Link>
        </div>
    )
}

export default Post1
