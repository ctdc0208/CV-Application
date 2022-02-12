import React from "react";

class Education extends React.Component {    
    render() {
        return (
            <div>

                <div>Education</div>
                <form>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Course Name' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Institution Name' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Start Date' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='End Date' size="40" required></input>
                    <button>Add</button>
                </form>

            </div>
        )
    }
}

export default Education