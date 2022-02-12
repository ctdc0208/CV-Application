import React from "react";
import './Tab.css';

class Tab extends React.Component {    
    render() {
        return (
            <ul className="tab-buttons">
                {
                this.props.tabitems.map(item => (
                <button key={item.id}>{item.text}</button>
                ))}
            </ul>
        )
    }
}

export default Tab