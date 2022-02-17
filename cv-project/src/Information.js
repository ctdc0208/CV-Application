import React from "react";
import './Information.css';
import Personal from './Forms/Personal';
import Experience from './Forms/Experience';
import Education from './Forms/Education';
import Skills from "./Forms/Skills";
// to do redux-form

class Information extends React.Component {    
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <Personal />
                    <Experience />
                    <Education />
                    <Skills />
                </div>
                <button>Submit</button>
            </div>
        )
    }
}

export default Information