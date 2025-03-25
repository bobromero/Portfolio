import React from 'react'

function Contact() {
  return (
    <div className='contact-background'>
      <div id='contact-grid'>

        <div>
          <a href="https://github.com/bobromero" target="_blank" rel="noopener noreferrer">
            <img className='contact-image' src="/Portfolio/Images/github.png" alt='Github'></img>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/robert-romero-a61403291/" target="_blank" rel="noopener noreferrer">
            <img className='contact-image' src="/Portfolio/Images/linkedIn.png" alt='LinkedIn'></img>
          </a>
        </div>
        <div className='middle'>
          <p className=''>ROBROMERO@GMAIL.COM</p>
        </div>

      </div>
    </div>
  )
}

export default Contact
