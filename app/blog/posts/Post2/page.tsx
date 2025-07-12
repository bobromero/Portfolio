import React from 'react'
import "../../blog.css"


function Post2() {
    return (
        <div className="post">
            <h1>Second Blog Post, MIT App Inventor!</h1>
            <div className="post-content">
                <div className="flex center">
                    <img className="postimg" src="/Portfolio/Images/BlogPost2/app.png" alt="Ghost Buster"></img>
                </div>
                <p>
                    So I decided to keep things consistent for this app and create a ghost busting buster app. The app is named BOBB and will take over app store. I am being forced to use MIT App Inventor which is new but lets just get started.
                    <br></br>
                    <br></br>
                    I started out with the idea to use a checkbox to turn on and off my image of a little ghost guy, but why why would I do that? I want the ghost to never come back, this is the reason why I did this, yes.
                    The easier development was only a small part of the reason.
                    <br></br>
                    <br></br>
                    I need to emulate an android so lets get to the bulk of the work.
                    <br></br>
                    <br></br>
                    I chose to use bluestacks which I am greatly regretting. I have ads on the side of the program but I don't care to find something else.
                    <br></br>
                    <br></br>
                </p>
                <div className="flex center">
                    <img className="postimg" src="/Portfolio/Images/BlogPost2/App1.png" alt="Ghost Busted"></img>
                </div>
                <p>
                    I tested my app and it worked, I was able to click on the ghost to make him disapear.
                    <br></br>
                    <br></br>
                    I immediately uninstalled bluestacks and will never be using it again if I'm lucky.
                    <br></br>
                    I downloaded LDPlayer which the download page looked very similar to bluestacks.
                    I tried looking into emulating via virtual box but that was a dead end.
                    Installing an apk is as easy as dragging it in the window.
                    It looks very similar to bluestacks but with fewer ads so, but its taking 5 minutes to install my app which is stupid, but it works.
                </p>
            </div>


        </div>
    )
}

export default Post2
