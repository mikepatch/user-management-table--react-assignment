import { TableColumn } from '@/lib/components/table';

export const API_URL_USERS = 'https://jsonplaceholder.typicode.com/users';

export const USER_TABLE_COLUMNS: TableColumn[] = [
	{
		key: 'name',
		label: 'Name',
		filterable: true,
	},
	{
		key: 'username',
		label: 'Username',
		filterable: true,
	},
	{
		key: 'email',
		label: 'Email',
		filterable: true,
	},
	{
		key: 'phone',
		label: 'Phone',
		filterable: true,
	},
];
