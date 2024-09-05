import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import { Table } from './components/table';
import { AppDispatch, RootState } from './store';
import { fetchUsers } from './features/users/usersSlice';
import { USER_TABLE_COLUMNS } from './constants';

function App() {
	const { users, status, error } = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUsers());
		}
	}, [dispatch, status]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>;
	}

	return <Table columns={USER_TABLE_COLUMNS} rows={users} />;
}

export default App;
