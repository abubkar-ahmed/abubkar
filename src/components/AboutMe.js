import React from 'react'

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
        <h1><span>01. </span>About Me</h1>
        <p>
            Hello! My name is Abubkar Farah i'm a Self taught front-end developer who is able to realise projects from the ground up. am well versed in all the key languages and am able to code and deploy in an organised and efficient manner.
        </p>
        <h2>Here are a few technologies I’ve been working with recently:</h2>
        <div className='skill'>
            <ul>
                <li> HTML5</li>
                <li>{`CSS3 & SCSS`}</li>
                <li>JavaScript (ES6)</li>
                <li>React JS</li>
                <li>{`Git & Github`}</li>
            </ul>
        </div>
    </section>
  )
}

export default AboutMe