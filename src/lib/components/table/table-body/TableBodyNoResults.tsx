type TableBodyNoResultsProps = {
	columnsCount: number;
};

export const TableBodyNoResults = ({ columnsCount }: TableBodyNoResultsProps) => {
	return (
		<tbody>
			<tr>
				<td colSpan={columnsCount}>
					<p style={{ textAlign: 'center' }}>Sorry, no results found.</p>
				</td>
			</tr>
		</tbody>
	);
};
