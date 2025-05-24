import ProjectCard from '@/components/ProjectCard'
import GetCards, { CardType } from '@/public/GetCards'
import React, { ReactElement } from 'react'
import Post1 from "@/app/blog/posts/Post1"
import "./blog.css"

function blog() {
    return (
        <div id="posts" >

            <h1>Blog Posts</h1>

            <Post1></Post1>


        </div>
    )
}

export default blog 
