import React,{ Component } from 'react'

class Experience extends Component{
	constructor(props){
		super(props)
		this.state = { course:'', institution:'', startDate:'', endDate:''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

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

	handleChange(event){
		this.setState({
		[event.target.name] : event.target.value
		})
	}

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
		</form>
		</div>
		)
	}
}

export default Experience
