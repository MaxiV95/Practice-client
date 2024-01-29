// CardUser.tsx
import { useState, type FC } from 'react';
import { User } from '../../store/useAppState';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import useAppState from '../../store/useAppState';
import DeleteConfirmationDialog from '../DeleteConfirmationDialog/DeleteConfirmationDialog';

interface CardUserProps {
	user: User;
}

export const CardUser: FC<CardUserProps> = ({ user }) => {
	const navigate = useNavigate();
	const { deleteUser } = useAppState();
	const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

	const handleDelete = () => {
		setDeleteDialogOpen(true);
	};

	const handleConfirmDelete = async () => {
		try {
			await deleteUser(user.id || '');
			console.log('Usuario eliminado:', user.id);
		} catch (error) {
			console.error('Error al eliminar el usuario:', error);
		} finally {
			setDeleteDialogOpen(false);
		}
	};

	const handleCloseDeleteDialog = () => {
		setDeleteDialogOpen(false);
	};

	return (
		<Card sx={{ width: '15rem' }}>
			<CardActions sx={{ justifyContent: 'flex-end' }}>
				<IconButton
					aria-label='Editar'
					onClick={() => navigate(`/update/${user.id}`)}
					sx={{ '&:hover': { color: 'blue' } }}
				>
					<Edit />
				</IconButton>
				<IconButton
					aria-label='Eliminar'
					onClick={handleDelete}
					sx={{ '&:hover': { color: 'red' } }}
				>
					<Delete />
				</IconButton>
			</CardActions>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image='https://th.bing.com/th/id/OIP.TlmWqcKt3oiaFCa1Dn_sAAHaEH'
					alt='User img'
				/>
				<CardContent>
					<Typography gutterBottom variant='h6'>
						{user.nickName}
					</Typography>
					<Typography gutterBottom variant='body2'>
						{user.email}
					</Typography>
					<Typography gutterBottom variant='body2'>
						Occupation: {user.occupation}
					</Typography>
				</CardContent>
			</CardActionArea>
			<DeleteConfirmationDialog
				open={isDeleteDialogOpen}
				onClose={handleCloseDeleteDialog}
				onConfirm={handleConfirmDelete}
			/>
		</Card>
	);
};

export default CardUser;
