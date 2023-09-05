import React from 'react';

import { styled } from 'styled-components';

function RecommendedTerm() {
  return (
    <RecommendedTermWrapper>
      <img src='/assets/glass.svg' alt='돋보기' width='16' height='16' />
      <span>검색어</span>
    </RecommendedTermWrapper>
  );
}

export default RecommendedTerm;

const RecommendedTermWrapper = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 40px;
  gap: 10px;
`;
