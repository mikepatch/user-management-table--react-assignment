import styles from './TableBody.module.css';
import type { TableRow, TableColumn } from '../shared/types';

type TableBodyProps = {
	columns: TableColumn[];
	rows: TableRow[];
};

export const TableBody = ({ columns, rows }: TableBodyProps) => {
	return (
		<tbody>
			{rows.map((row) => (
				<tr key={`${row.id}-${row.name}`} className={styles.tableBodyRow}>
					{columns.map((column) => (
						<td key={`${row.id}-${column.key}`}>{row[column.key] || 'N/A'}</td>
					))}
				</tr>
			))}
		</tbody>
	);
};
