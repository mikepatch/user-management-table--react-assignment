import { useMemo } from 'react';

import { DEBOUNCE_TIME } from './constants';
import type { TableColumn } from './types';
import { useDebounce } from './hooks';
import { filterRows } from './utils';

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

	const handleFilterChange = (key: string, value: string) => {
		onFilterChange?.(key, value);
	};

	const handleClearFilter = (key: string) => {
		onClearFilter?.(key);
	};

	return (
		<table role="table" aria-labelledby={caption ? 'table-caption' : undefined}>
			{caption && <caption id="table-caption">{caption}</caption>}
			<thead>
				<tr>
					{columns.map((column) => (
						<th scope="col" key={column.key}>
							<span>{column.label}</span>
							{filters && (
								<div>
									<label htmlFor={`filter-${column.key}`}>Filter by {column.label}</label>
									<input
										id={`filter-${column.key}`}
										type="text"
										value={filters[column.key] || ''}
										onChange={(e) => handleFilterChange(column.key, e.target.value)}
										placeholder={`Filter by ${column.label}`}
									/>
									{onClearFilter && (
										<button
											type="button"
											aria-label={`Clear ${column.label} filter`}
											onClick={() => handleClearFilter(column.key)}
										>
											clear
										</button>
									)}
								</div>
							)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{filteredRows.length > 0 ? (
					filteredRows.map((row) => (
						<tr key={row.id}>
							{columns.map((column) => (
								<td key={`${row.id}-${column.key}`}>{row[column.key] || 'N/A'}</td>
							))}
						</tr>
					))
				) : (
					<tr>
						<td colSpan={columns.length}>
							<p>Sorry, no data found</p>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};
