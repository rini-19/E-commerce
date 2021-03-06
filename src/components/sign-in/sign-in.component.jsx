import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = event =>{
		event.preventDefault();

		this.setState({email: '', password: ''});
	};

	handleChange = event =>{
		const {name, value} = event.target;

		this.setState({[name]: value});
	};

	render(){
		return(
			<div className = 'sign-in'>
				<h1>You already have an account</h1>
				<span> Enter your credentials </span>

				<form onSubmit = {this.handleSubmit}>
					<FormInput
						name = 'email'
						type = 'email'
						handleChange = {this.handleChange}
						value = {this.state.email}
						label = 'email'
						required
					/>
					<FormInput
						name = 'password'
						type = 'password'
						handleChange = {this.handleChange}
						value = {this.state.password}
						label = 'password'
						required
					/>

					<CustomButton type = 'submit'> Submit Form </CustomButton>

				</form>
			</div>
		)
	}
}

export default SignIn;