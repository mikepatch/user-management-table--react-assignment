import type { TableColumn } from './types';

type TableBodyProps = {
	columns: TableColumn[];
	rows: Record<TableColumn['key'], string | number>[];
};

export const TableBody = ({ columns, rows }: TableBodyProps) => (
	<tbody>
		{rows.length > 0 ? (
			rows.map((row) => (
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
);
