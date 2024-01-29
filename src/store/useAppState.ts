// useAppState.ts
import axios from 'axios';
import { create } from 'zustand';

const baseURL = process.env.REACT_APP_API_URL;

type AppState = {
	users: User[];
	occupations: string[];
	getOccupations: () => void;
	getUsers: () => void;
	getUserById: (id: string) => User | undefined;
	createUser: (userData: Partial<User>) => Promise<void>;
	updateUser: (id: string, userData: Partial<User>) => Promise<void>;
	deleteUser: (id: string | undefined) => Promise<void>;
};

export interface User {
	id?: string;
	email: string;
	nickName: string;
	occupation: string;
}

const useAppState = create<AppState>((set, get) => ({
	users: [],
	occupations: [],
	getOccupations: async () => {
		try {
			const response = await axios.get(`${baseURL}/user/occupation`);
			console.log(response.data);
			set({ occupations: response.data });
		} catch (error) {
			console.error(error);
		}
	},
	getUsers: async () => {
		try {
			const response = await axios.get(`${baseURL}/user`);
			console.log(response.data);
			set({ users: response.data });
		} catch (error) {
			console.error(error);
		}
	},
	getUserById: (id: string) => {
		const user = get().users.find((user) => user.id === id);
		return user;
	},
	createUser: async (userData: Partial<User>) => {
		try {
			const response = await axios.post(`${baseURL}/user`, userData);
			set((state) => ({ users: [...state.users, response.data] }));
		} catch (error) {
			console.error(error);
		}
	},
	updateUser: async (id: string, userData: Partial<User>) => {
		try {
			await axios.put(`${baseURL}/user/${id}`, userData);
			set((state) => ({
				users: state.users.map((user) =>
					user.id === id ? { ...user, ...userData } : user,
				),
			}));
		} catch (error) {
			console.error(error);
		}
	},
	deleteUser: async (id: string | undefined) => {
		try {
			await axios.delete(`${baseURL}/user/${id}`);
			set((state) => ({
				users: state.users.filter((user) => user.id !== id),
			}));
		} catch (error) {
			console.error(error);
		}
	},
}));

export default useAppState;
