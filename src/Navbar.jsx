import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './styles/Navbar.css';

class Navbar extends Component {
    render() {
      return (
            <div className='navbar-container'>
            <div className='navbar-sticky'>

              <Link activeClass="navbar-active" to="personal" spy={true} smooth={true} offset={-250} duration={500}>
                <button className='font-weight-700'>Personal Information</button>
              </Link>
              <Link  activeClass="navbar-active" to="education" spy={true} smooth={true} offset={-250} duration={500}>
                <button className='font-weight-700'>Education</button>
              </Link>
              <Link activeClass="navbar-active" to="work-experience" spy={true} smooth={true} offset={-250} duration={500}>
                <button className='font-weight-700'>Work Experience</button>
              </Link>
              <Link activeClass="navbar-active" to="project-experience" spy={true} smooth={true} offset={-250} duration={500}>
                <button className='font-weight-700'>Project Experience</button>
              </Link>
              <Link activeClass="navbar-active" to="skills" spy={true} smooth={true} offset={-250} duration={500}>
                <button className='font-weight-700'>Skills</button>
              </Link>
            </div>
            </div>
      )
    }
}

export default Navbar
