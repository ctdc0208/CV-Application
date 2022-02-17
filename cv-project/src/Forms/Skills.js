import React,{ Component } from 'react'

class Skills extends Component{
	constructor(props){
		super(props)
		this.state = { technical:'', software:'', communication:''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// Form submitting logic, prevent default page refresh
	handleSubmit(event){
		const { technical, software, communication} = this.state
		event.preventDefault()
		alert(`
		____Your Education____\n
		technical : ${technical}
		software : ${software}
		communication : ${communication}
		`)
	}

	// Method causes to store all the values of the
	// input field in react state single method handle
	// input changes of all the input field using ES6
	// javascript feature computed property names
	handleChange(event){
		this.setState({
		[event.target.name] : event.target.value
		})
	}

	render(){
		return(
			<div>
		<p1>Skills</p1>
		<form onSubmit={this.handleSubmit}>
			<div>
			<input
				name='technical'
				placeholder='Technical'
				value = {this.state.technical}
				onChange={this.handleChange}
			/>
			</div>
			<div>
			<input
				name='software'
				placeholder='Software'
				value={this.state.software}
				onChange={this.handleChange}
			/>
			</div>
			<div>
			<input
				name='communication'
				placeholder='Communication'
				value={this.state.communication}
				onChange={this.handleChange}
			/>
			</div>
		</form>
		</div>
		)
	}
}

export default Skills
