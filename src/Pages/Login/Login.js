import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	// handle created user login
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		// const user = { email, password };
		// console.log(user);
		login(email, password)
			.then((result) => {
				const user = result.user;
				// console.log( user );
				form.reset();
				navigate('/profile');
			})
			.catch((error) => {
				// console.error( 'error ', error )
				toast.error('Register first to login');
				form.reset();
			});
	};

	return (
		<div className='hero w-full my-20'>
			<div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-10'>
				<h1 className='text-5xl text-center font-bold'>Login </h1>
				<form
					onSubmit={handleLogin}
					className='card-body'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							name='email'
							placeholder='email'
							className='input input-bordered'
						/>
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
						/>
						<label className='label'>
							<a
								href='#'
								className='label-text-alt link link-hover'>
								Forgot password?
							</a>
						</label>
					</div>
					<div className='form-control mt-6'>
						<input
							className='btn btn-primary'
							type='submit'
							value='Login'
						/>
					</div>
				</form>
				<p className='text-center'>
					New to Hero Rider{' '}
					<label
						htmlFor='sign-up-modal'
						className='text-orange-600 font-bold cursor-pointer'>
						Sign Up
					</label>
				</p>
			</div>
		</div>
	);
};

export default Login;
