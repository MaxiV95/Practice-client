// DeleteConfirmationDialog.tsx
import type { FC } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
} from '@mui/material';

interface DeleteConfirmationDialogProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

const DeleteConfirmationDialog: FC<DeleteConfirmationDialogProps> = ({
	open,
	onClose,
	onConfirm,
}) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Confirmar eliminación</DialogTitle>
			<DialogContent>
				<p>¿Estás seguro de que deseas eliminar este usuario?</p>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color='primary'>
					Cancelar
				</Button>
				<Button onClick={onConfirm} color='primary'>
					Confirmar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteConfirmationDialog;
