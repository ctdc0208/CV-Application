import React from "react";

class Experience extends React.Component {    
    render() {
        return (
            <div>

                <p1>Experience</p1>
                <form>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Job Title' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Company Name' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Start Date' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='End Date' size="40" required></input>
                    <div className="bullet-points">
                        <div>Skills Acquired</div>
                        <input type='text' id='title' name='title' autocomplete="off" placeholder='One Skill' size="40" required></input>
                        <input type='text' id='title' name='title' autocomplete="off" placeholder='Two Skill' size="40" required></input>
                        <input type='text' id='title' name='title' autocomplete="off" placeholder='Three Skill' size="40" required></input>
                        <button>add</button>
                    </div>
                    <button>Add</button>
                </form>

            </div>
        )
    }
}

export default Experience