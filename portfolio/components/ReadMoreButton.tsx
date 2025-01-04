"use client"
import React, { ReactElement } from 'react'
import { useState } from 'react';

function ReadMoreButton({children}:any) {
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleText = () => {
        setIsReadMore(!isReadMore);
      };
    var kids=React.Children.toArray(children)
  return (
    <div>
        <div>
            {isReadMore? children[1] : children[0]}
        </div>
        <button onClick={toggleText}>{isReadMore ? 'Read Less' : 'Read More'}</button>
    </div>
  )
}

export default ReadMoreButton