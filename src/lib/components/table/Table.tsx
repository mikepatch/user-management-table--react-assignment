import { useMemo } from 'react';

import styles from './Table.module.css';
import { DEBOUNCE_TIME } from './constants';
import type { TableColumn, TableFilter, TableRow } from './shared/types';
import { useDebounce } from './hooks';
import { filterRows } from './utils';
import { TableContent } from './TableContent';
import { TableHeader } from '@/lib/components/table/table-header';

type Unit = 'px' | 'em' | 'rem' | 'vh' | 'vw';
type MaxHeight = `${string}${Unit}`;

type TableProps = {
	columns: TableColumn[];
	rows: TableRow[];
	caption?: string;
	filters?: TableFilter;
	onFilterChange?: (key: string, value: string) => void;
	onClearFilter?: (key: string) => void;
	height?: MaxHeight;
	isDataLoading?: boolean;
	isDataError?: boolean;
};

export const Table = ({
	columns,
	rows,
	caption,
	filters,
	onFilterChange,
	onClearFilter,
	height = '500px',
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
				<TableHeader
					columns={columns}
					filters={filters}
					onFilterChange={onFilterChange}
					onClearFilter={onClearFilter}
				/>
				<TableContent
					columns={columns}
					rows={filteredRows}
					isDataLoading={isDataLoading}
					isDataError={isDataError}
				/>
			</table>
		</div>
	);
};
