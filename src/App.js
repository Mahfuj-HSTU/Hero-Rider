import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/Rider';
import Login from './Pages/Login/Login';

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
					element: <SignUp></SignUp>,
				},
				{
					path: '/learner',
					element: <SignUp></SignUp>,
				},
				{
					path: 'login',
					element: <Login></Login>,
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
