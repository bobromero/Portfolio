import Link from 'next/link'

import "./blog.css"

function blog() {
    return (
        <div id="posts" >

            <h1>Blog Posts</h1>

            <div>
                <Link href="/blog/posts/Post1">
                    <h3>My First Blog Post</h3>
                </Link>
                <Link href="/blog/posts/Post2">
                    <h3>My Second Blog post</h3>
                </Link>
                <Link href="/blog/posts/Post3">
                    <h3>Group Project Started!</h3>
                </Link>
                <Link href="/blog/posts/Post4">
                    <h3>Cad objects</h3>
                </Link>
            </div>

        </div>
    )
}

export default blog 
