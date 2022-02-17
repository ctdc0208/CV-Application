import React,{ Component } from 'react'

class Experience extends Component{
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
}

export default Experience
