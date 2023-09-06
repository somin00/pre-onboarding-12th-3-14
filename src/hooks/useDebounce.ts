import { DELAY_TIME } from 'constants/debounceConfig';

import { useEffect, useState } from 'react';

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
