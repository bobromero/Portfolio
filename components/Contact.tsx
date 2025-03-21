import React from 'react'

function Contact() {
  return (
    <div className='cotact-background'>
      <div  id='contact-grid'>

        <div >
            <a className='contact' href="https://github.com/bobromero" target="_blank" rel="noopener noreferrer">
              <img className='contact-image' src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' alt='Github'></img>
            </a>
        </div>
        <div className=''>
            <a className='contact' href="https://www.linkedin.com/in/robert-romero-a61403291/" target="_blank" rel="noopener noreferrer">
              <img className='contact-image' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='LinkedIn'></img>
            </a>
        </div>
        <div className='contact middle'>
            <p className=''>ROBROMERO@GMAIL.COM</p>
        </div>

      </div>
    </div>
  )
}

export default Contact