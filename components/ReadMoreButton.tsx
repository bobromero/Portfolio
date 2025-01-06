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
        <br></br>
        <button className='main-page-font read-more' onClick={toggleText}><strong>{isReadMore ? 'Read Less' : 'Read More'}</strong></button>
    </div>
  )
}

export default ReadMoreButton