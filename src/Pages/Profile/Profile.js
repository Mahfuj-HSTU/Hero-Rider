import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Profile = () => {
	const { user } = useContext(AuthContext);

	const { data: details = [] } = useQuery({
		queryKey: ['details'],
		queryFn: () =>
			fetch(`http://localhost:5000/users/${user.email}`).then((res) =>
				res.json()
			),
	});
	// console.log(details);

	return (
		<div className='mt-24'>
			<h1 className='text-4xl text-slate-700 mb-10'>Your Profile</h1>
			<div className='card card-compact w-1/2 bg-base-100 shadow-2xl mx-auto p-10'>
				<div className='text-end'>
					<label
						htmlFor='details-modal'
						className='btn btn-xs btn-outline w-14'>
						Edit
					</label>
				</div>
				<figure>
					<img
						className='rounded-full'
						src={details.photoUrl ? details.photoUrl : <FaUserCircle />}
						alt='profile'
						width='300px'
						height='300px'
					/>
				</figure>
				<div className='card-body text-start mt-7'>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>Name:</span> {details.name}
					</h2>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>Email:</span> {details.email}
					</h2>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>Address:</span> {details.address}
					</h2>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>District:</span> {details.area}
					</h2>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>Mobile:</span> {details.phone}
					</h2>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>Vehicle:</span> {details.carType}
					</h2>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>Vehicle Information:</span>{' '}
						{details.carInfo}
					</h2>
					<h2 className='text-2xl mb-3'>
						<span className='font-semibold'>Age:</span> {details.age}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Profile;
