import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
    render() {
      return (
            <div className='navbar-container'>
                <button className='navbar-active'>Personal Information</button>
                <button>Education</button>
                <button>Work Experience</button>
                <button>Project Experience</button>
                <button>Skills</button>
            </div>
      )
    }
}

export default Navbar
