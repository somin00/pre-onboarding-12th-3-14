import React from 'react';

import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import RecommendedTerm from 'components/RecommendedTerm';
import { searchResultState } from 'store/searchResult';

interface SearchResultPropsType {
  focusIndex: number;
}
function SearchResult({ focusIndex }: SearchResultPropsType) {
  const searchResultList = useRecoilValue(searchResultState);

  return (
    <SearchResultWrapper>
      {searchResultList.length === 0 ? (
        '검색어가 없음'
      ) : (
        <>
          <h3>추천 검색어</h3>
          <ul>
            {searchResultList.map(({ sickCd, sickNm }, index) => {
              const isFocus = index === focusIndex;
              return <RecommendedTerm key={sickCd} keyword={sickNm} isFocus={isFocus} />;
            })}
          </ul>
        </>
      )}
    </SearchResultWrapper>
  );
}

export default SearchResult;

const SearchResultWrapper = styled.div`
  background-color: #fff;
  width: 522px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 16px;

  h3 {
    font-weight: 500;
    color: gray;
    font-size: 0.8rem;
    margin: 10px 20px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
