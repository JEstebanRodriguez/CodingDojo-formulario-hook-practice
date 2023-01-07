import React from 'react'
import { useForm } from './hooks/useForm'

const App = () => {
	const [
		{ firstname, lastname, email, password, confirm_password },
		handleChange
	] = useForm({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirm_password: ''
	})
	return (
		<div className='container py-3'>
			<div className='row'>
				<div className='col-md-4 offset-md-4'>
					<form>
						<div className='mb-3'>
							<label htmlFor='firstname' className='form-label'>
								First Name
							</label>
							<input
								type='text'
								name='firstname'
								className='form-control'
								id='firstname'
								placeholder='First Name'
								value={firstname}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='lastname' className='form-label'>
								Last Name
							</label>
							<input
								type='text'
								name='lastname'
								className='form-control'
								id='lastname'
								placeholder='Last Name'
								value={lastname}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'>
								Email
							</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								placeholder='Email address'
								value={email}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'>
								Password
							</label>
							<input
								type='password'
								name='password'
								className='form-control'
								id='password'
								placeholder='Password'
								value={password}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='confirm_password' className='form-label'>
								Confirm Password
							</label>
							<input
								type='password'
								name='confirm_password'
								className='form-control'
								id='confirm_password'
								placeholder='Confirm Password'
								value={confirm_password}
								onChange={handleChange}
							/>
						</div>
					</form>
					<h5 className='text-center'>Your form data</h5>
					<p>
						<strong>First Name:</strong> {firstname}
					</p>
					<p>
						<strong>Last Name:</strong> {lastname}
					</p>
					<p>
						<strong>Email:</strong> {email}
					</p>
					<p>
						<strong>Password:</strong> {password}
					</p>
					<p>
						<strong>Confirm Password:</strong> {confirm_password}
					</p>
				</div>
			</div>
		</div>
	)
}

export default App
