// App.tsx
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Divider } from '@mui/material';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home/Home';
import UserForm from './pages/UserForm/UserForm';
import About from './pages/About/About';
import useAppState from './store/useAppState';

const App: React.FC = () => {
	const { getUsers, getOccupations } = useAppState();

	useEffect(() => {
		getUsers();
		getOccupations();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div>
				<NavBar />
				<Divider />
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/create' element={<UserForm />} />
					<Route path='/update/:id' element={<UserForm />} />
					<Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/home' replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
