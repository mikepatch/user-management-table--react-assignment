import { TableColumn } from '@/lib/components/table';

export const API_URL_USERS = 'https://jsonplaceholder.typicode.com/users';

export const USER_TABLE_COLUMNS: TableColumn[] = [
	{
		key: 'name',
		label: 'Name',
	},
	{
		key: 'username',
		label: 'Username',
	},
	{
		key: 'email',
		label: 'Email',
	},
	{
		key: 'phone',
		label: 'Phone',
	},
];
