import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, RootState } from '@/store';
import { fetchUsers } from '@/features/users/usersSlice';
import { clearFilter, setFilter } from '@/features/filters/filtersSlice';
import { Table } from '@/lib/components/table';
import { USER_TABLE_COLUMNS } from '@/constants';

export const UserManagementTable = () => {
	const { users, status, error } = useSelector((state: RootState) => state.users);
	const filters = useSelector((state: RootState) => state.filters);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUsers());
		}
	}, [dispatch, status]);

	const handleFilterChange = (key: string, value: string) => {
		dispatch(setFilter({ key, value }));
	};

	const handleClearFilter = (key: string) => {
		dispatch(clearFilter(key));
	};

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>;
	}

	return (
		<Table
			caption="Users Table"
			columns={USER_TABLE_COLUMNS}
			rows={users}
			filters={filters}
			onFilterChange={handleFilterChange}
			onClearFilter={handleClearFilter}
		/>
	);
};
