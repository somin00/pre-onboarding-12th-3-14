import React from 'react';

import { styled } from 'styled-components';

interface RecommendedTermPropsType {
  keyword: string;
}

function RecommendedTerm({ keyword }: RecommendedTermPropsType) {
  return (
    <RecommendedTermWrapper>
      <img src='/assets/glass.svg' alt='돋보기' width='16' height='16' />
      <span>{keyword}</span>
    </RecommendedTermWrapper>
  );
}

export default RecommendedTerm;

const RecommendedTermWrapper = styled.li`
  display: flex;
  padding: 0 20px;
  align-items: center;
  list-style: none;
  height: 40px;
  gap: 10px;

  &:hover {
    background-color: #f9f9f9;
  }
`;
