import React from 'react'
import {Link} from 'react-scroll';
import Pdf from '../Documents/Abubkar.pdf'


function Header() {

  const [menu , setMenu] = React.useState(false);
  const navRef = React.useRef();

  const showNavbar = () => {
    setMenu( prevMenu => {
      return !prevMenu ;
    })
    navRef.current.classList.toggle('nav-responsive')
  }



  return (
    <header>
        <h1>
          <Link to="landing" spy={true} smooth={true} offset={-150} duration={500}>ABUBKAR</Link>
        </h1>
        <div className={menu ? 'ham active' : 'ham'} onClick={showNavbar}>
          <span className={menu ? 'span-1 active' : 'span-1'}></span>
          <span className={menu ? 'span-2 active' : 'span-2'}></span>
          <span className={menu ? 'span-3 active' : 'span-3'}></span>
        </div>
        <nav className= 'nav' ref={navRef}>
            <ul>
                <li>
                  <Link to="about-me" spy={true} smooth={true} offset={-150} duration={500}>
                    <span>01.</span> About
                  </Link>
                  </li>
                <li>
                  <Link to="work" spy={true} smooth={true} offset={-150} duration={500}>
                    <span>02.</span> Work
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>
                    <span>03.</span> Contact
                  </Link>
                </li>
                <li className='resume'>
                  <a href={Pdf} target = '_blank' rel='noopner noreferrer'>Resume</a>
                </li>
            </ul>
            
        </nav>
    </header>
  )
}

export default Header