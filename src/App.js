import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import AllUsers from './Pages/AllUsers/AllUsers';
import Rider from './Pages/SignUp/Rider';
import Learner from './Pages/SignUp/Learner';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main></Main>,
			children: [
				{
					path: '/',
					element: <Home></Home>,
				},
				{
					path: '/rider',
					element: <Rider></Rider>,
				},
				{
					path: '/learner',
					element: <Learner></Learner>,
				},
				{
					path: '/login',
					element: <Login></Login>,
				},
				{
					path: '/profile',
					element: <Profile></Profile>,
				},
				{
					path: '/users',
					element: <AllUsers></AllUsers>,
				},
			],
		},
	]);

	return (
		<div className='App'>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
