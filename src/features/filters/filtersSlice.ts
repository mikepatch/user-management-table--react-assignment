import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TableColumn } from '@/lib/components/table';

type FiltersState = Record<TableColumn['key'], string>;

const initialState: FiltersState = {};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<{ columnKey: TableColumn['key']; value: string }>) => {
			state[action.payload.columnKey] = action.payload.value;
		},
		clearFilter: (state, action: PayloadAction<TableColumn['key']>) => {
			delete state[action.payload];
		},
	},
});

export const { setFilter, clearFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
