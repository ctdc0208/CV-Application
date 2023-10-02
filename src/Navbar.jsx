import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './styles/Navbar.css';

class Navbar extends Component {
    render() {
      return (
            <div className='navbar-container'>
            <div className='navbar-sticky'>

              <Link activeClass="navbar-active" to="personal" spy={true} smooth={true} offset={-250} duration={500}>
                <button className='label-name'>Personal Information</button>
              </Link>
              <Link  activeClass="navbar-active" to="education" spy={true} smooth={true} offset={-165} duration={500}>
                <button className='label-name'>Education</button>
              </Link>
              <Link activeClass="navbar-active" to="work-experience" spy={true} smooth={true} offset={-215} duration={500}>
                <button className='label-name'>Work Experience</button>
              </Link>
              <Link activeClass="navbar-active" to="project-experience" spy={true} smooth={true} offset={-265} duration={500}>
                <button className='label-name'>Project Experience</button>
              </Link>
              <Link activeClass="navbar-active" to="skills" spy={true} smooth={true} offset={-245} duration={500}>
                <button className='label-name'>Skills</button>
              </Link>
            </div>
            </div>
      )
    }
}

export default Navbar
