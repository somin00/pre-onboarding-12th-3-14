import { KeyboardEvent, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { searchResultState } from 'store/searchResult';

interface KeyEventType {
  [key: string]: () => void;
}

function useKeyDown() {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const [isAutoSearch, setIsAutoSearch] = useState<boolean>(false);
  const searchResultList = useRecoilValue(searchResultState);
  const maxLength = searchResultList.length;
  const isStartindex = focusIndex === -1;
  const isFirstIndex = focusIndex === 0;
  const isLastIndex = focusIndex + 1 === maxLength;
  const autoKeyword = searchResultList[focusIndex]?.sickNm;

  const KeyEvent: KeyEventType = {
    ArrowDown: () => {
      if (maxLength === 0) return;

      if (isLastIndex) {
        setFocusIndex(0);
        return;
      }

      if (isStartindex) setIsAutoSearch(true);

      setFocusIndex(prev => prev + 1);
    },

    ArrowUp: () => {
      if (isStartindex) return;

      if (isFirstIndex) {
        setFocusIndex(-1);
        setIsAutoSearch(false);
        return;
      }
      setFocusIndex(prev => prev - 1);
    },

    Escape: () => {
      setFocusIndex(-1);
      setIsAutoSearch(false);
    },
  };

  const pressKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (KeyEvent[e.key]) {
      KeyEvent[e.key]();
    }
  };

  return { isAutoSearch, setIsAutoSearch, autoKeyword, focusIndex, setFocusIndex, pressKey };
}

export default useKeyDown;
