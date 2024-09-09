import styles from './TableBodySkeleton.module.css';

type TableBodySkeletonProps = {
	columnsCount: number;
	rowsCount: number;
};

export const TableBodySkeleton = ({ columnsCount, rowsCount }: TableBodySkeletonProps) => {
	return (
		<tbody className={styles.tableBodySkeleton}>
			{Array.from({ length: rowsCount }).map((_, rowIndex) => (
				<tr key={`skeleton-row-${rowIndex}`} className={styles.tableBodySkeletonRow}>
					{Array.from({ length: columnsCount }).map((_, cellIndex) => (
						<td
							key={`skeleton-cell-${rowIndex}-${cellIndex}`}
							className={styles.tableBodySkeletonCell}
						>
							<div className={styles.tableBodySkeletonContent} />
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};
