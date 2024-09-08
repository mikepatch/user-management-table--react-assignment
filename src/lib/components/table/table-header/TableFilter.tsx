import { MdClear } from 'react-icons/md';

import { TableColumn } from '../shared/types';
import styles from './TableFilter.module.css';

type TableFilterProps = {
	column: TableColumn;
	value: string;
	onFilterChange?: (key: string, value: string) => void;
	onClearFilter?: (key: string) => void;
};

export const TableFilter = ({ column, value, onFilterChange, onClearFilter }: TableFilterProps) => {
	const handleFilterChange = (key: string, value: string) => {
		onFilterChange?.(key, value);
	};

	const handleClearFilter = (key: string) => {
		onClearFilter?.(key);
	};

	return (
		<div className={styles.tableFilter}>
			<label htmlFor={`filter-${column.key}`} className={styles.tableFilterLabel}>
				{`Filter by ${column.label}`}
			</label>
			<input
				id={`filter-${column.key}`}
				className={styles.tableFilterInput}
				type="text"
				value={value || ''}
				onChange={(e) => handleFilterChange(column.key, e.target.value)}
				placeholder={`Filter by ${column.label}`}
			/>
			{onClearFilter && (
				<button
					type="button"
					className={styles.tableFilterButton}
					aria-label={`Clear ${column.label} filter`}
					onClick={() => handleClearFilter(column.key)}
					disabled={!value}
				>
					<MdClear aria-hidden="true" />
					<span className={styles.tableFilterButtonLabel}>Clear {column.label} filter</span>
				</button>
			)}
		</div>
	);
};
