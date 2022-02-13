import React from "react";
import './Information.css';
import Personal from './Forms/Personal';
import Experience from './Forms/Experience';
import Education from './Forms/Education';

class Information extends React.Component {    
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <Personal />
                    <Experience />
                    <Education />
                </div>
            </div>
        )
    }
}

export default Information