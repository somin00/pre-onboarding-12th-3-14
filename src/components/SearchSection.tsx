import React from 'react';

import { styled } from 'styled-components';

import SearchBox from 'components/SearchBox';

import SearchResult from './SearchResult';

function SearchSection() {
  return (
    <SearchSectionWrapper>
      <h2>
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </h2>
      <SearchBox />
      <SearchResult />
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
