import { useEffect } from 'react';

import { getSearchWords } from 'apis';
import { useSetRecoilState } from 'recoil';

import { searchResultState } from 'store/searchResult';

function useFetch(debouncedValue: string) {
  const setResultList = useSetRecoilState(searchResultState);

  useEffect(() => {
    if (!debouncedValue) {
      setResultList([]);
      return;
    }

    getSearchWords(debouncedValue).then(res => {
      setResultList(res);
    });
  }, [debouncedValue, setResultList]);
}

export default useFetch;
