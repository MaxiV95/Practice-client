// NavBar.tsx
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
	return (
		<div style={{ backgroundColor: 'white' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					padding: '1rem',
				}}
			>
				<Button 
					variant='outlined' 
					size='large' 
					component={NavLink} 
					to='/home'
				>
					Home
				</Button>
				<Button
					variant='outlined'
					size='large'
					component={NavLink}
					to='/create'
				>
					Create
				</Button>
				<Button
					variant='outlined'
					size='large'
					component={NavLink}
					to='/about'
				>
					About
				</Button>
			</Box>
		</div>
	);
};

export default NavBar;
