import React from 'react'
import "../../blog.css"


function Post5() {
    return (
        <div className="post">
            <h1>Free Cad Assignment</h1>
            <div className="post-content">
                <div className="flex center cad-post">
                    <h2>Part 1</h2>
                    <p className="post-text">This is the first part I made in Free cad using the tutorial that was given in class.</p>
                    <img className="postimg" src="/Portfolio/Images/BlogPost5/part1.png" alt="Part 1"></img>
                </div>
                <div className="flex center cad-post">
                    <h2>Desk Charger Holder</h2>
                    <p className="post-text">This desk charger holder was inspired by Ignacios and is desgined to use friction as the method of staying on the desk. It has holes for big chargers like for my laptop and small ones for my phone and headphones.</p>
                    <img className="postimg" src="/Portfolio/Images/BlogPost5/deskCharger.png" alt="Desk Charger"></img>
                </div>
                <div className="flex center cad-post">
                    <h2>Connected parts</h2>
                    <p className="post-text">This connection piece was inspired by the plastic buckles that are everywhere but it looks a bit scuffed. It's functionality should work as long as you can get it together.</p>
                    <img className="postimg" src="/Portfolio/Images/BlogPost5/connectionMale.png" alt="Male"></img>
                    <img className="postimg" src="/Portfolio/Images/BlogPost5/connectionFemale.png" alt="Female"></img>
                </div>
            </div>


        </div>
    )
}

export default Post5

