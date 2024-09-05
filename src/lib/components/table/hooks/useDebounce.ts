import { useEffect, useRef, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	const timeoutRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		timeoutRef.current = setTimeout(() => setDebouncedValue(value), delay);

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [value, delay]);

	return debouncedValue;
};
