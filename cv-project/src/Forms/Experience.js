import React,{ Component } from 'react'

class Experience extends Component{
<<<<<<< HEAD
	constructor(props){
		super(props)
		this.state = { project:'', startDate:'', startDate:'', endDate:'', experience:''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		const { project, company, startDate, endDate, experience } = this.state
		event.preventDefault()
		alert(`
		____Your Personal Information____\n
		project : ${project}
		company : ${company}
		startDate : ${startDate}
		endDate : ${endDate}
		experience : ${experience}
		`)
	}

	handleChange(event){
		this.setState({
		[event.target.name] : event.target.value
		})
	}

	render(){
		return(
			<div>
		<p1>Experience</p1>
		<form onSubmit={this.handleSubmit}>
			<div>
			<input
				name='project'
				placeholder='Project Name'
				value = {this.state.project}
				onChange={this.handleChange}
			/>
			</div>
			<div>
			<input
				name='company'
				placeholder='Company Name'
				value={this.state.company}
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
			<input
				name='experience'
				placeholder='Experience Acquired'
				value={this.state.experience}
				onChange={this.handleChange}
			/>
			</div>
		</form>
		</div>
		)
	}
=======
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
	____Your Details____\n
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
    <p1>Experience</p1>
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
>>>>>>> 71a302a75ae7d742467abf48374956b9adfcef8a
}

export default Experience
