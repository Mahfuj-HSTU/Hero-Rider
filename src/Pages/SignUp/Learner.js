import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Learner = () => {
	const [error, setError] = useState('');
	const navigate = useNavigate();

	// handle user create
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const user = { name, email, password };
		// console.log( user );

		const url = '';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('Registration successfully');
					form.reset();
					navigate('/login');
				}
				// console.log( data )
			})
			.catch((error) => {
				setError(error);
			});
	};

	return (
		<div className='hero w-full my-24'>
			<div className='card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 py-10'>
				<h1 className='text-5xl text-center font-bold'> Registration form </h1>
				<form
					onSubmit={handleRegister}
					className='card-body'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Full Name</span>
						</label>
						<input
							type='text'
							name='name'
							placeholder='Enter your name'
							className='input input-bordered'
						/>
					</div>

					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							name='email'
							placeholder='Enter your email'
							className='input input-bordered'
							required
						/>
						<p className='text-red-600 font-semibold'>{error.slice(22, 45)}</p>
					</div>

					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input
							type='password'
							name='password'
							placeholder='password'
							className='input input-bordered'
							required
						/>
					</div>

					<div className='form-control mt-6'>
						<input
							className='btn btn-primary'
							type='submit'
							value='Register'
						/>
					</div>
				</form>
				{/* if you are old user and you have an account */}
				<p className='text-center'>
					Already have an account?{' '}
					<Link
						className='text-orange-600 font-bold'
						to='/login'>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Learner;
