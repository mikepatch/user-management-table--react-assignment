import type { TableFilter, TableRow } from '../shared/types';

export const filterRows = <T extends TableRow>(rows: T[], filters: TableFilter): T[] => {
	const matchesFilters = (row: T): boolean => {
		return Object.entries(filters).every(([key, filterValue]) => {
			const cellValue = String(row[key]).toLowerCase();
			return cellValue.includes(filterValue.toLowerCase());
		});
	};

	return rows.filter(matchesFilters);
};
