import styles from './TableHeader.module.css';
import { TableFilter } from './TableFilter';
import { useTableContext } from '../TableContext';

export const TableHeader = () => {
	const { columns } = useTableContext();
	return (
		<thead className={styles.tableHeader}>
			<tr>
				{columns.map((column) => (
					<th scope="col" key={column.key} className={styles.tableHeaderCell}>
						<span>{column.label}</span>
						{column.filterable && <TableFilter column={column} />}
					</th>
				))}
			</tr>
		</thead>
	);
};
