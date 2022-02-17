import React,{ Component } from 'react'

class Personal extends Component{
	constructor(props){
		super(props)
		this.state = { email:'',name:'', age:'', address:'',phoneNo:''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		const { email, name, age, address, phoneNo } = this.state
		event.preventDefault()
		alert(`
		____Your Personal Information____\n
		Email : ${email}
		Name : ${name}
		Age : ${age}
		Address : ${address}
		Phone No : ${phoneNo}
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
				<p1>Personal Information</p1>
				<form onSubmit={this.handleSubmit}>
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
				</form>
		</div>
		)
	}
}

export default Personal
