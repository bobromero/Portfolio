import ProjectCard from '@/components/ProjectCard'
import GetCards, { CardType } from '@/public/GetCards'
import React, { ReactElement } from 'react'
import Link from 'next/link'

import "./blog.css"

function blog() {
    return (
        <div id="posts" >

            <h1>Blog Posts</h1>

            <Link className='navbar-text' href="/blog/posts/Post1">
                My First Blog Post
            </Link>

        </div>
    )
}

export default blog 
