import React from "react";
import "../../blog.css";

function Post9() {
  return (
    <div className="post">
      <h1>Fabricating for a Function Pt.3</h1>
      <div className="post-content">
        <div className="flex center cad-post">
          <h2>3d printed version</h2>
          <p className="post-text">
            I printed the part and it works! It is not perfect and I have made
            some changes to make it better, but it works!
          </p>
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost9/printed.jpg"
            alt="3dPrinted thang1"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Post9;
