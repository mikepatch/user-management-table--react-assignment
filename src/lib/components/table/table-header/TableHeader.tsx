import styles from './TableHeader.module.css';
import { TableFilter } from './TableFilter';
import type { TableColumn, TableFilter as TableFilterType } from '../shared/types';

type TableHeaderProps = {
	columns: TableColumn[];
	filters?: TableFilterType;
	onFilterChange?: (key: string, value: string) => void;
	onClearFilter?: (key: string) => void;
};

export const TableHeader = ({
	columns,
	filters,
	onFilterChange,
	onClearFilter,
}: TableHeaderProps) => {
	return (
		<thead className={styles.tableHeader}>
			<tr>
				{columns.map((column) => (
					<th scope="col" key={column.key} className={styles.tableHeaderCell}>
						<span>{column.label}</span>
						{filters && column.filterable && (
							<TableFilter
								column={column}
								value={filters[column.key] || ''}
								onFilterChange={onFilterChange}
								onClearFilter={onClearFilter}
							/>
						)}
					</th>
				))}
			</tr>
		</thead>
	);
};
