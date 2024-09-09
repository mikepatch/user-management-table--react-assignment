import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, RootState } from '@/store';
import { fetchUsers } from '@/features/users/usersSlice';
import { clearFilter, setFilter } from '@/features/filters/filtersSlice';
import { Table } from '@/lib/components/table';
import { USER_TABLE_COLUMNS } from '@/constants';

export const UserManagementTable = () => {
	const { users, status } = useSelector((state: RootState) => state.users);
	const filters = useSelector((state: RootState) => state.filters);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUsers());
		}
	}, [dispatch, status]);

	const handleFilterChange = (columnKey: string, value: string) => {
		dispatch(setFilter({ columnKey, value }));
	};

	const handleClearFilter = (columnKey: string) => {
		dispatch(clearFilter(columnKey));
	};

	return (
		<Table
			caption="Users Table"
			columns={USER_TABLE_COLUMNS}
			rows={users}
			filters={filters}
			onFilterChange={handleFilterChange}
			onClearFilter={handleClearFilter}
			height="500px"
			isDataLoading={status === 'loading'}
			isDataError={status === 'failed'}
		/>
	);
};
