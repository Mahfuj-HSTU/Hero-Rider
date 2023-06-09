import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SignUpModal from '../SignUp/SignUpModal';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const { data: details = [] } = useQuery({
		queryKey: ['details'],
		queryFn: () =>
			fetch(`http://localhost:5000/users/${user?.email}`).then((res) =>
				res.json()
			),
	});
	// console.log(details.role);

	const handleLogOut = () => {
		logOut().then().catch();
	};

	const menuItems = (
		<>
			<li className='font-semibold'>
				<Link to='/'>Home</Link>{' '}
			</li>
			{user?.email ? (
				<>
					<li className='font-semibold'>
						<Link to='/profile'>Profile</Link>{' '}
					</li>
					{details.role === 'admin' && (
						<li className='font-semibold'>
							<Link to='/users'>All Users</Link>{' '}
						</li>
					)}
					<li>
						{' '}
						<button
							onClick={handleLogOut}
							className='btn-ghost'>
							Log Out
						</button>
					</li>
				</>
			) : (
				<>
					<li className='font-semibold'>
						<Link to='/login'>Login</Link>{' '}
					</li>
					<li className='font-semibold'>
						<label htmlFor='sign-up-modal'>Sign Up</label>
					</li>
				</>
			)}
		</>
	);

	return (
		<div className='navbar h-16 bg-slate-300 fixed top-0 z-30 left-0 right-0 px-0 lg:px-12 mx-auto'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<u
						tabIndex={0}
						className='menu menu-compact dropdown-content p-2 shadow bg-base-500 rounded-box w-52'>
						{menuItems}
					</u>
				</div>
				<Link
					to='/'
					className='btn btn-ghost normal-case text-2xl font-bold'>
					Hero Rider
				</Link>
			</div>
			<div className='navbar-end hidden lg:flex'>
				<ul className='menu menu-horizontal p-0'>{menuItems}</ul>
			</div>
			<SignUpModal></SignUpModal>
		</div>
	);
};

export default Navbar;
