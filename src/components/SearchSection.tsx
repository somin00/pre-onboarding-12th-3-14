import React from 'react';

import { styled } from 'styled-components';

import SearchBox from 'components/SearchBox';
import useKeyDown from 'hooks/useKeyDown';

import SearchResult from './SearchResult';

function SearchSection() {
  const { isAutoSearch, setIsAutoSearch, autoKeyword, focusIndex, setFocusIndex, pressKey } =
    useKeyDown();

  return (
    <SearchSectionWrapper>
      <h2>
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </h2>
      <SearchBox
        isAutoSearch={isAutoSearch}
        setIsAutoSearch={setIsAutoSearch}
        autoKeyword={autoKeyword}
        setFocusIndex={setFocusIndex}
        pressKey={pressKey}
      />
      <SearchResult focusIndex={focusIndex} />
    </SearchSectionWrapper>
  );
}

export default SearchSection;

const SearchSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
  }
`;
