import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../shared/types';
import { getUsers } from '../../services/usersAPI';

export type UsersState = {
	users: User[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
};

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
	const response = await getUsers();

	return response;
});

const initialState: UsersState = {
	users: [],
	status: 'idle',
	error: null,
} satisfies UsersState as UsersState;

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.status = 'succeeded';
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Something went wrong';
			});
	},
});

export default usersSlice.reducer;
