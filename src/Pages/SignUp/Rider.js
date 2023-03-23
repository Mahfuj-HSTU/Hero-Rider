import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Rider = () => {
	const [error, setError] = useState('');
	// const [ createdUserEmail, setCreatedUserEmail ] = useState( "" );
	const { register, handleSubmit, reset } = useForm();
	const { createUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const imageHostKey = process.env.REACT_APP_imgbb;
	// console.log(imageHostKey);

	// handle user create
	const handleRegister = (data) => {
		const profileImage = data.profile_img[0];
		const licence = data.dr_img[0];
		const nidCard = data.nid_img[0];
		// const image = { profileImage, licence, nidCard };
		const formData = new FormData();
		formData.append('profileImage', 'licence', profileImage, licence);
		const imgUrl = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
		console.log(formData);

		fetch(imgUrl, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				if (imgData.success) {
					// const profileImage = imgData.data.url;
					// const licence = imgData.data.url;
					// const nidCard = imgData.data.url;
					const name = data.name;
					const email = data.email;
					const address = data.address;
					const age = data.age;
					const area = data.area;
					const carInfo = data.car_info;
					const carType = data.car_type;
					const phone = data.phone;
					const password = data.password;
					const role = 'rider';

					createUser(email, password)
						.then((result) => {
							const user = result.user;
							// console.log(user);
							saveUsers();
							reset();
							setError('');
						})
						.catch((error) => {
							console.error(error);
							setError(error.message);
						});

					// save users
					const saveUsers = () => {
						const user = {
							// photoUrl,
							name,
							email,
							address,
							age,
							area,
							carInfo,
							carType,
							phone,
							password,
							role,
						};
						fetch('', {
							method: 'POST',
							headers: {
								'content-type': 'application/json',
							},
							body: JSON.stringify(user),
						})
							.then((res) => res.json())
							.then((data) => {
								if (data.acknowledged) {
									console.log(data);
									toast.success('Registration successful.');
									// setCreatedUserEmail( user?.email );
									// console.log( user );
									// navigate(from, { replace: true });
								}
							});
					};
				}
			});
	};

	return (
		<div className='hero w-full my-24'>
			<div className='card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-100 py-10'>
				<h1 className='text-5xl text-center font-bold'> Registration form </h1>
				<form
					onSubmit={handleSubmit(handleRegister)}
					className='card-body'>
					<div className='lg:flex justify-around gap-7'>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Full Name</span>
							</label>
							<input
								type='text'
								name=''
								{...register('name', { required: 'Name is required' })}
								placeholder='Enter your name'
								className='input input-bordered'
							/>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								name=''
								{...register('email', { required: 'Name is required' })}
								placeholder='Enter your email'
								className='input input-bordered'
								required
							/>
							{/* <p className='text-red-600 font-semibold'>
								{error?.slice(22, 45)}
							</p> */}
						</div>
					</div>

					<div className='lg:flex justify-around gap-7'>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Address</span>
							</label>
							<input
								type='text'
								name=''
								{...register('address', { required: 'Name is required' })}
								placeholder='Enter your address'
								className='input input-bordered'
							/>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Mobile</span>
							</label>
							<input
								type='number'
								name=''
								{...register('phone', { required: 'Name is required' })}
								placeholder='Enter your phone number'
								className='input input-bordered'
								required
							/>
							{/* <p className='text-red-600 font-semibold'>
								{error?.slice(22, 45)}
							</p> */}
						</div>
					</div>

					<div className='lg:flex justify-around gap-7'>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Area</span>
							</label>
							<select
								name=''
								{...register('area', { required: 'Name is required' })}
								className='input input-bordered'>
								<option value='0'>Select District:</option>
								<option value='Dhaka'>Dhaka</option>
								<option value='Chittagong'>Chittagong</option>
								<option value='Barishal'>Barishal</option>
								<option value='Rangpur'>Rangpur</option>
								<option value='Rajshahi'>Rajshahi</option>
								<option value='Sylet'>Sylet</option>
								<option value='Khulna'>Khulna</option>
								<option value='Mymanshing'>Mymanshing</option>
							</select>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Age</span>
							</label>
							<input
								type='number'
								name=''
								{...register('age', { required: 'Name is required' })}
								placeholder='Enter your age'
								className='input input-bordered'
								required
							/>
							{/* <p className='text-red-600 font-semibold'>
								{error?.slice(22, 45)}
							</p> */}
						</div>
					</div>

					<div className='lg:flex justify-between gap-1'>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Profile</span>
							</label>
							<input
								type='file'
								name=''
								{...register('profile_img', { required: 'Name is required' })}
								required
							/>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Driving Licence</span>
							</label>
							<input
								type='file'
								name=''
								{...register('dr_img', { required: 'Name is required' })}
								required
							/>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>NID card</span>
							</label>
							<input
								type='file'
								name=''
								{...register('nid_img', { required: 'Name is required' })}
								required
							/>
						</div>
					</div>

					<div className='lg:flex justify-around gap-7'>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Vehicle Type</span>
							</label>
							<select
								name=''
								{...register('car_type', { required: 'Name is required' })}
								className='input input-bordered'>
								<option value='0'>Select vehicle:</option>
								<option value='Car'>Car</option>
								<option value='Bike'>Bike</option>
							</select>
							{/* <p className='text-red-600 font-semibold'>
								{error?.slice(22, 45)}
							</p> */}
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Vehicle Information</span>
							</label>
							<input
								type='text'
								name=''
								{...register('car_info', { required: 'Name is required' })}
								placeholder='Enter vehicle name, model'
								className='input input-bordered'
							/>
						</div>
					</div>

					<div className='lg:flex justify-around gap-7'>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='password'
								name=''
								{...register('password', { required: 'Name is required' })}
								placeholder='password'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Confirm Password</span>
							</label>
							<input
								type='password'
								name=''
								{...register('confirm_password', {
									required: 'Name is required',
								})}
								placeholder='Re-type password'
								className='input input-bordered'
								required
							/>
						</div>
					</div>

					<div className='form-control mt-6 mx-auto w-52'>
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

export default Rider;
