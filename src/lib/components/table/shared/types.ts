export type TableColumn = {
	key: string;
	label: string;
	filterable?: boolean;
};

export type TableRow = Record<TableColumn['key'], string | number>;

export type TableFilter = Record<TableColumn['key'], string>;

type Unit = 'px' | 'em' | 'rem' | 'vh' | 'vw';
type MaxHeight = `${string}${Unit}`;

export type TableProps = {
	columns: TableColumn[];
	rows: TableRow[];
	caption?: string;
	filters?: TableFilter;
	onFilterChange?: (key: string, value: string) => void;
	onClearFilter?: (key: string) => void;
	height?: MaxHeight;
	isDataLoading?: boolean;
	isDataError?: boolean;
};
