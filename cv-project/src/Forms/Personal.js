import React from "react";

class Personal extends React.Component {    
    render() {
        return (
            <div>

                <div>Basic Information</div>
                <form>
                    <input type='text' id='title' name='title' placeholder='Full Name' required></input>
                    <input type='text' id='title' name='title' placeholder='E-mail Address'  required></input>
                    <input type='text' id='title' name='title' placeholder='Phone Number' required></input>
                    <input type='text' id='title' name='title' placeholder='Address'  required></input>
                </form>

            </div>
        )
    }
}

export default Personal