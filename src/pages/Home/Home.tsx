// Home.tsx
import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import useAppState from '../../store/useAppState';
import CardUser from '../../components/CardUser/CardUser';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: FC<HomeProps> = () => {
	const { users } = useAppState();

	return (
		<>
			<Typography
				variant='h4'
				align='center'
				gutterBottom
				sx={{ marginTop: '2rem' }}
			>
				Listado de Usuarios
			</Typography>
			<Box
				display='grid'
				margin='2rem auto'
				width='80%'
				gridTemplateColumns='repeat(auto-fit, minmax(15rem, 1fr))'
				gap={1}
			>
				{users?.map((item, index) => {
					return <CardUser user={item} key={index} />;
				})}
			</Box>
		</>
	);
};

export default Home;
