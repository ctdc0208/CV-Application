import React from "react";

class Experience extends React.Component {    
    render() {
        return (
            <div>

                <div>Experience</div>
                <form>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Job Title' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Company Name' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Start Date' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='End Date' size="40" required></input>
                    <button>Add</button>
                </form>

            </div>
        )
    }
}

export default Experience