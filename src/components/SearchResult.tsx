import React from 'react';

import { styled } from 'styled-components';

import RecommendedTerm from 'components/RecommendedTerm';

function SearchResult() {
  return (
    <SearchResultWrapper>
      <h3>추천 검색어</h3>
      <ul>
        <RecommendedTerm />
        <RecommendedTerm />
        <RecommendedTerm />
        <RecommendedTerm />
      </ul>
    </SearchResultWrapper>
  );
}

export default SearchResult;

const SearchResultWrapper = styled.div`
  background-color: #fff;
  width: 502px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 10px;
  border-radius: 16px;

  h3 {
    font-weight: 500;
    color: gray;
    font-size: 0.8rem;
    margin: 0;
    margin-bottom: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
