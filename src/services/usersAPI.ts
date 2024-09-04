import { User } from '../shared/types';

export const getUsers = async (): Promise<User[]> => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		if (!Array.isArray(data)) {
			throw new Error('Data is not an array');
		}

		return data.map(({ id, name, username, email, phone }: User) => ({
			id,
			name,
			username,
			email,
			phone,
		}));
	} catch (error) {
		console.error('API:', error);
		throw error;
	}
};
