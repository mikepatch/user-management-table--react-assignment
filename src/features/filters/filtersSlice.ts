import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TableColumn } from '@/lib/components/table';

type FiltersState = Record<TableColumn['key'], string>;

const initialState: FiltersState = {};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<{ key: TableColumn['key']; value: string }>) => {
			state[action.payload.key] = action.payload.value;
		},
		clearFilter: (state, action: PayloadAction<TableColumn['key']>) => {
			delete state[action.payload];
		},
		clearAllFilters: () => initialState,
	},
});

export const { setFilter, clearFilter, clearAllFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
