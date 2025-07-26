import React from "react";
import "../../blog.css";

function Post7() {
  return (
    <div className="post">
      <h1>Fusion 360 Assignment</h1>
      <div className="post-content">
        <div className="flex center cad-post">
          <h2>Tutorial Shape</h2>
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost7/tutorialPart.png"
            alt="Tutorial Shape"
          />
        </div>
        <div className="flex center cad-post">
          <h2>LampShade</h2>
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost7/squiggle.png"
            alt="LampShadeSquiggle"
          />
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost7/dark.png"
            alt="LampShadeDark"
          />
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost7/lampshade.png"
            alt="LampShade"
          />
        </div>
        <div className="flex center cad-post">
          <h2>Flask</h2>
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost7/flask.png"
            alt="Flask"
          />
        </div>
        <div className="flex center cad-post">
          <h2>Bowler</h2>
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost7/bowler1.png"
            alt="Bowler"
          />
          <img
            className="postimg"
            src="/Portfolio/Images/BlogPost7/bowler2.png"
            alt="Bowler2"
          />
        </div>
      </div>
    </div>
  );
}

export default Post7;
