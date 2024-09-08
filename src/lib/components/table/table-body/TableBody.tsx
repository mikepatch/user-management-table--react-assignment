import styles from './TableBody.module.css';
import { useTableContext } from '../TableContext';

export const TableBody = () => {
	const { columns, rows } = useTableContext();

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
