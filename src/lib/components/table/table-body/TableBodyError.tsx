import styles from './TableBodyError.module.css';

type TableBodyErrorProps = {
	columnsCount: number;
};

export const TableBodyError = ({ columnsCount }: TableBodyErrorProps) => {
	return (
		<tbody className={styles.tableBodyError}>
			<tr>
				<td colSpan={columnsCount} className={styles.tableBodyErrorCell}>
					<p className={styles.tableBodyErrorMessage}>An error occurred while fetching data.</p>
				</td>
			</tr>
		</tbody>
	);
};
