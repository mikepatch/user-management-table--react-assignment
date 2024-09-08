import type { TableColumn, TableRow } from './shared/types';
import {
	TableBody,
	TableBodyError,
	TableBodyNoResults,
	TableBodySkeleton,
} from '@/lib/components/table/table-body';

type TableContentProps = {
	columns: TableColumn[];
	rows: TableRow[];
	isDataLoading: boolean;
	isDataError: boolean;
};

export const TableContent = ({ columns, rows, isDataLoading, isDataError }: TableContentProps) => {
	if (isDataLoading) {
		return <TableBodySkeleton columnsCount={columns.length} rowsCount={15} />;
	}

	if (isDataError) {
		return <TableBodyError columnsCount={columns.length} />;
	}

	if (rows.length === 0) {
		return <TableBodyNoResults columnsCount={columns.length} />;
	}

	return <TableBody columns={columns} rows={rows} />;
};
