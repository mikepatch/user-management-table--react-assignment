export const filterRows = <T extends Record<string, string | number>>(
	rows: T[],
	filters: Record<string, string>,
): T[] => {
	const matchesFilters = (row: T): boolean => {
		return Object.entries(filters).every(([key, filterValue]) => {
			const cellValue = String(row[key]).toLowerCase();
			return cellValue.includes(filterValue.toLowerCase());
		});
	};

	return rows.filter(matchesFilters);
};
