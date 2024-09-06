import { TableColumn } from './types';

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
		<div>
			<label htmlFor={`filter-${column.key}`}>Filter by {column.label}</label>
			<input
				id={`filter-${column.key}`}
				type="text"
				value={value || ''}
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
	);
};
