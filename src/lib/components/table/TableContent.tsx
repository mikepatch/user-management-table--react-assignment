import { useTableContext } from './TableContext';
import { TableBody, TableBodyError, TableBodyNoResults, TableBodySkeleton } from './table-body';

export const TableContent = () => {
	const { columns, rows, isDataLoading, isDataError } = useTableContext();

	if (isDataLoading) {
		return <TableBodySkeleton columnsCount={columns.length} rowsCount={15} />;
	}

	if (isDataError) {
		return <TableBodyError columnsCount={columns.length} />;
	}

	if (rows.length === 0) {
		return <TableBodyNoResults columnsCount={columns.length} />;
	}

	return <TableBody />;
};
