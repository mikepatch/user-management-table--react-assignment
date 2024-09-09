import { useMemo } from 'react';

import styles from './Table.module.css';
import { DEBOUNCE_TIME } from './constants';
import type { TableProps } from './shared/types';
import { useDebounce } from './hooks';
import { filterRows } from './utils';
import { TableContent } from './TableContent';
import { TableHeader } from './table-header';
import { TableContextProvider } from './TableContext';

export const Table = ({
	columns,
	rows,
	caption,
	filters,
	onFilterChange,
	onClearFilter,
	height = 'fit-content',
	isDataLoading = false,
	isDataError = false,
}: TableProps) => {
	const debouncedFilters = useDebounce(filters, DEBOUNCE_TIME);
	const filteredRows = useMemo(() => {
		if (!debouncedFilters || Object.keys(debouncedFilters).length === 0) {
			return rows;
		}

		return filterRows(rows, debouncedFilters);
	}, [rows, debouncedFilters]);

	return (
		<div role="region" tabIndex={0} style={{ height }} className={styles.tableContainer}>
			<TableContextProvider
				value={{
					columns,
					rows: filteredRows,
					filters,
					onFilterChange,
					onClearFilter,
					isDataLoading,
					isDataError,
				}}
			>
				<table
					role="table"
					aria-labelledby={caption ? 'table-caption' : undefined}
					className={styles.table}
				>
					{caption && (
						<caption id="table-caption" className={styles.tableCaption}>
							{caption}
						</caption>
					)}
					<TableHeader />
					<TableContent />
				</table>
			</TableContextProvider>
		</div>
	);
};
