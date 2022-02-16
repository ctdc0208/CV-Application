import React, { Component } from "react";

class Personal extends Component {    
    constructor(props){
        super(props)
        this.state = { email:'',name:'', age:'', address:'',phoneNo:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      // Form submitting logic, prevent default page refresh 
      handleSubmit(event){
        const { email, name, age, address, phoneNo } = this.state
        event.preventDefault()
        alert(`
          Email : ${email}
          Name : ${name}
          Age : ${age}
          Address : ${address}
          Phone No : ${phoneNo}
        `)
      }
    
       
  // Method causes to store all the values of the 
  // input field in react state single method handle 
  // input changes of all the input field using ES6 
  // javascript feature computed property names
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state


    render() {

        return (
            <div>
                <p1>Basic Information</p1>
                <form>
                    <div>
                    <input 
                        name='email'
                        placeholder='Email' 
                        value = {this.state.email}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <input
                        name='name' 
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <input
                        name='age' 
                        placeholder='Age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <input
                        name='address' 
                        placeholder='Address'
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <input
                        name='phoneNo' 
                        placeholder='Phone No'
                        value={this.state.phoneNo}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <button>Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Personal