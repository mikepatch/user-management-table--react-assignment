import { TableFilter } from './TableFilter';
import type { TableColumn } from './types';

type TableHeaderProps = {
	columns: TableColumn[];
	filters?: Record<string, string>;
	onFilterChange?: (key: string, value: string) => void;
	onClearFilter?: (key: string) => void;
};

export const TableHeader = ({
	columns,
	filters,
	onFilterChange,
	onClearFilter,
}: TableHeaderProps) => (
	<thead>
		<tr>
			{columns.map((column) => (
				<th scope="col" key={column.key}>
					<span>{column.label}</span>
					{filters && (
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
