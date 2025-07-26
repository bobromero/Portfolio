import Link from "next/link";

import "./blog.css";

function blog() {
  return (
    <div id="posts">
      <h1>Blog Posts</h1>

      <div>
        <Link href="/blog/posts/Post1">
          <h3>My First Blog Post</h3>
        </Link>
        <Link href="/blog/posts/Post2">
          <h3>My Second Blog Post</h3>
        </Link>
        <Link href="/blog/posts/Post3">
          <h3>Group Project Started!</h3>
        </Link>
        <Link href="/blog/posts/Post4">
          <h3>Tinker Cad Objects</h3>
        </Link>
        <Link href="/blog/posts/Post5">
          <h3>Free Cad Objects</h3>
        </Link>
        <Link href="/blog/posts/Post6">
          <h3>Golf Tee Holder Pt.1</h3>
        </Link>
        <Link href="/blog/posts/Post7">
          <h3>Fusion 360 Objects</h3>
        </Link>
        <Link href="/blog/posts/Post8">
          <h3>Golf Tee Holder Pt.2</h3>
        </Link>
        <Link href="/blog/posts/Post9">
          <h3>Golf Tee Holder Pt.3</h3>
        </Link>
      </div>
    </div>
  );
}

export default blog;
