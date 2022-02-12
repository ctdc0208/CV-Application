import React from "react";

class Personal extends React.Component {    
    render() {
        return (
            <div>

                <div>Basic Information</div>
                <form>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Full Name' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='E-mail Address' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Phone Number' size="40" required></input>
                    <input type='text' id='title' name='title' autocomplete="off" placeholder='Address' size="40" required></input>
                </form>

            </div>
        )
    }
}

export default Personal