import React,{ Component } from 'react'

class Experience extends Component{
constructor(props){
	super(props)
	this.state = { course:'', institution:'', startDate:'', endDate:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { course, institution, startDate, endDate} = this.state
	event.preventDefault()
	alert(`
	____Your Education____\n
	course : ${course}
	institution : ${institution}
	startDate : ${startDate}
	endDate : ${endDate}
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
render(){
	return(
        <div>
    <p1>Education</p1>
	<form onSubmit={this.handleSubmit}>
		<div>
		<input
			name='course'
			placeholder='Course Name'
			value = {this.state.course}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<input
			name='institution'
			placeholder='Institution Name'
			value={this.state.institution}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<input
			name='startDate'
			placeholder='Start Date'
			value={this.state.startDate}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<input
			name='endDate'
			placeholder='End Date'
			value={this.state.endDate}
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

export default Experience
