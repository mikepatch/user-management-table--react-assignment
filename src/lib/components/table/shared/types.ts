export type TableColumn = {
	key: string;
	label: string;
	filterable?: boolean;
};

export type TableRow = Record<TableColumn['key'], string | number>;

export type TableFilter = Record<TableColumn['key'], string>;
