import { createContext, useContext } from 'react';

import type { TableProps } from './shared/types';

const TableContext = createContext<TableProps | undefined>(undefined);

export const useTableContext = () => {
	const context = useContext(TableContext);

	if (!context) {
		throw new Error('useTableContext must be used within a TableContextProvider');
	}

	return context;
};

export const TableContextProvider = TableContext.Provider;
