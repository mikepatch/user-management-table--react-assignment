type Column = {
	key: string;
	label: string;
};

type TableProps = {
	columns: Column[];
	rows: Record<Column['key'], string | number>[];
	caption?: string;
};

export const Table = ({ columns, rows, caption }: TableProps) => {
	return (
		<table>
			{caption && <caption>{caption}</caption>}
			<thead>
				<tr>
					{columns.map((column) => (
						<th scope="col" key={column.key}>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.length > 0 ? (
					rows.map((row) => (
						<tr key={row.id}>
							{columns.map((column) => (
								<td key={`${row.id}-${column.key}`}>{row[column.key]}</td>
							))}
						</tr>
					))
				) : (
					<tr>
						<td colSpan={columns.length}>Sorry, no data found :(</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};
