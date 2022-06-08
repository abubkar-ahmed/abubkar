import React from 'react'
import {Link} from 'react-scroll';

function Landing() {
  return (
    <section className='landing' id='landing'>
        <h1>Hi, My Name Is</h1>
        <h2>Abubkar Farah.</h2>
        <h3>I'm Front-End Developer.</h3>
        <Link to="work" spy={true} smooth={true} offset={-150} duration={500}> Check My Work</Link>
    </section>
  )
}

export default Landing