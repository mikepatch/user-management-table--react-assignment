import { useMemo } from 'react';

import { DEBOUNCE_TIME } from './constants';
import type { TableColumn } from './types';
import { useDebounce } from './hooks';
import { filterRows } from './utils';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

type TableProps = {
	columns: TableColumn[];
	rows: Record<TableColumn['key'], string | number>[];
	caption?: string;
	filters?: Record<string, string>;
	onFilterChange?: (key: string, value: string) => void;
	onClearFilter?: (key: string) => void;
};

export const Table = ({
	columns,
	rows,
	caption,
	filters,
	onFilterChange,
	onClearFilter,
}: TableProps) => {
	const debouncedFilters = useDebounce(filters, DEBOUNCE_TIME);
	const filteredRows = useMemo(() => {
		if (!debouncedFilters || Object.keys(debouncedFilters).length === 0) {
			return rows;
		}

		return filterRows(rows, debouncedFilters);
	}, [rows, debouncedFilters]);

	return (
		<table role="table" aria-labelledby={caption ? 'table-caption' : undefined}>
			{caption && <caption id="table-caption">{caption}</caption>}
			<TableHeader
				columns={columns}
				filters={filters}
				onFilterChange={onFilterChange}
				onClearFilter={onClearFilter}
			/>
			<TableBody columns={columns} rows={filteredRows} />
		</table>
	);
};
