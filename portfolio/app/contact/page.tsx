import React from 'react'

type Props = {}

function Contact({}: Props) {
  return (
    <div>
        <div>
            <a href="https://github.com/bobromero" target="_blank" rel="noopener noreferrer">
            <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' alt='Github'></img>
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/robert-romero-a61403291/" target="_blank" rel="noopener noreferrer">
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='LinkedIn'></img>
            </a>
        </div>
        <div>
            <h3>Email</h3>
            <p>robromero389@gmail.com</p>
        </div>

    </div>
  )
}

export default Contact