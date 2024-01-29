// About.tsx
import React from 'react';
import { Box, Typography, Paper, Avatar, Link } from '@mui/material';

const About: React.FC = () => {
	return (
		<Box p={3}>
			<Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
				<Avatar
					alt='Tu Nombre'
					src='https://avatars.githubusercontent.com/u/118027004'
					sx={{ width: 150, height: 150, margin: 'auto' }}
				/>
				<Typography variant='h4' mt={2}>
					¡Hola, soy Maximiliano Van Megroot!
				</Typography>
				<Typography variant='h6' mt={2}>
					Full Stack Web Developer
				</Typography>
				<Typography variant='body1' mt={2}>
					Encuéntrame en LinkedIn:{' '}
					<Link
						href='https://www.linkedin.com/in/maximilianovanmegroot/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</Link>
				</Typography>
				<Typography variant='body1'>
					Contáctame:{' '}
					<Link href={`mailto: maximilianovanmegroot@gmail.com`}>
						maximilianovanmegroot@gmail.com
					</Link>
				</Typography>
				<Typography variant='body1' mt={2}>
					Enlaces al repositorio:
				</Typography>
				<Typography variant='body2' mt={1}>
					Frontend:{' '}
					<Link
						href='https://github.com/MaxiV95/Practice-client'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub Frontend
					</Link>
				</Typography>
				<Typography variant='body2'>
					Backend:{' '}
					<Link
						href='https://github.com/MaxiV95/Practice-server'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub Backend
					</Link>
				</Typography>
			</Paper>
		</Box>
	);
};

export default About;
