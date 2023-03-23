import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpModal = () => {
	const navigate = useNavigate();
	const handleRider = () => {
		navigate('rider');
	};
	const handleLearner = () => {
		navigate('learner');
	};
	return (
		<div>
			<input
				type='checkbox'
				id='sign-up-modal'
				className='modal-toggle'
			/>
			<div className='modal bg-transparent backdrop-brightness-50'>
				<div className='modal-box'>
					<label
						htmlFor='sign-up-modal'
						className='btn btn-sm btn-circle absolute right-2 top-2'>
						✕
					</label>
					<div className='grid grid-cols-1 gap-5 mt-6 mb-3'>
						<label
							onClick={handleRider}
							htmlFor='sign-up-modal'
							className='btn btn-outline btn-info font-semibold text-lg'>
							Join as a Rider
						</label>
						<label
							onClick={handleLearner}
							htmlFor='sign-up-modal'
							className='btn btn-outline btn-info font-semibold text-lg'>
							Join as a Driving Learner
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpModal;
