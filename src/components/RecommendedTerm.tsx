import React, { memo } from 'react';

import { styled } from 'styled-components';

interface RecommendedTermPropsType {
  keyword: string;
  isFocus: boolean;
}

function RecommendedTerm({ keyword, isFocus }: RecommendedTermPropsType) {
  return (
    <RecommendedTermWrapper className={isFocus ? 'focus' : ''}>
      <img src='/assets/glass.svg' alt='돋보기' width='16' height='16' />
      <span>{keyword}</span>
    </RecommendedTermWrapper>
  );
}

export default memo(RecommendedTerm);

const RecommendedTermWrapper = styled.li`
  display: flex;
  padding: 0 20px;
  align-items: center;
  list-style: none;
  height: 40px;
  gap: 10px;

  &.focus {
    background-color: #e8e8e8;
  }

  &:hover {
    background-color: #e8e8e8;
  }
`;
