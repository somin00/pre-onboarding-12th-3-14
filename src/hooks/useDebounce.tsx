import { useEffect, useState } from 'react';

const DELAY_TIME = 300;

function useDebounce(value: string) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, DELAY_TIME);

    return () => clearTimeout(debounceTimer);
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
