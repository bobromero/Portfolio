import React from "react";
import "../../blog.css";

function Post8() {
  return (
    <div className="post">
      <h1>Fabricating for a Function Pt.2</h1>
      <div className="post-content">
        <div className="flex center cad-post">
          <h2>Tee holder</h2>
          <p className="post-text">
            This is the best thing I have ever made, I just hope that it works.
            I made this with the intention of snapping tees on to the clip and
            being able to grab one easily if need be. This make organization
            very easy. The width of the tee is 4.5 mm This should fit 4 tees
          </p>

          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost8/teeHolder.png"
            alt="Part 1"
          ></img>
          <h2>Tee holder fix</h2>
          <p className="post-text">
            Turns out it was not perfect, I had an issue with the strength of
            the clips. I made them wider and changed the part that connects to
            the bag. It was in the wrong spot and just poked out, so I changed
            it to an oval.
          </p>

          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost8/fixedHolder.png"
            alt="Part 1"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Post8;
