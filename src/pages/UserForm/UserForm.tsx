// UserForm.tsx
import {
	Button,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { useState, type FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAppState from '../../store/useAppState';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserFormProps {}

export const UserForm: FC<UserFormProps> = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { occupations, createUser, getUserById, updateUser } = useAppState();
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [data, setData] = useState({
		nickName: '',
		email: '',
		occupation: '',
	});

	useEffect(() => {
		if (id) {
			const user = getUserById(id);
			if (user) {
				setData({
					nickName: user.nickName,
					email: user.email,
					occupation: user.occupation,
				});
			}
		} else {
			setData({
				nickName: '',
				email: '',
				occupation: '',
			});
		}
	}, [id, getUserById]);

	const isValidEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleChanges = (event: any) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
		setErrorMessage('');
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (
			data.nickName.trim() === '' ||
			data.email.trim() === '' ||
			data.occupation.trim() === ''
		) {
			setErrorMessage('Por favor, completa todos los campos antes de enviar.');
			return;
		}
		if (!isValidEmail(data.email)) {
			setErrorMessage(
				'Correo electrónico no válido. Por favor, ingresa un correo electrónico válido.',
			);
			return;
		}
		if (!errorMessage.length) {
			if (id) {
				await updateUser(id, data);
			} else {
				await createUser(data);
			}
			navigate('/home');
		}
	};

	return (
		<div>
			<Container maxWidth='md' sx={{ marginTop: '2rem' }}>
				<Typography variant='h4' align='center' gutterBottom>
					{id ? 'Actualización' : 'Registro'} de Usuario
				</Typography>
				<form
					onSubmit={handleSubmit}
					style={{
						display: 'flex',
						flexDirection: 'column',
						margin: 'auto',
					}}
				>
					<TextField
						name='nickName'
						label='Nickname'
						variant='outlined'
						value={data.nickName}
						onChange={handleChanges}
						fullWidth
						margin='normal'
					/>
					<TextField
						name='email'
						label='Email'
						variant='outlined'
						value={data.email}
						onChange={handleChanges}
						fullWidth
						margin='normal'
						type='email'
						error={!!data.email && !isValidEmail(data.email)} // Agrega esta línea para mostrar el error
						helperText={
							data.email && !isValidEmail(data.email)
								? 'Correo electrónico no válido'
								: ''
						} // Agrega esta línea para mostrar el mensaje de error
					/>
					<FormControl fullWidth variant='outlined' margin='normal'>
						<InputLabel id='occupation-label'>Occupation</InputLabel>
						<Select
							name='occupation'
							label='Occupation'
							labelId='occupation-label'
							value={data.occupation}
							onChange={handleChanges}
						>
							{occupations.map((occupationOption) => (
								<MenuItem key={occupationOption} value={occupationOption}>
									{occupationOption}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						sx={{ marginTop: '1rem' }}
					>
						Enviar
					</Button>
				</form>
				<div>
					{errorMessage && (
						<Typography
							variant='body2'
							color='error'
							sx={{ marginTop: '1rem' }}
						>
							{errorMessage}
						</Typography>
					)}
				</div>
			</Container>
		</div>
	);
};

export default UserForm;
