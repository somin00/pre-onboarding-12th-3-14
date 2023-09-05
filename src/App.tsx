import React from 'react';

import styled from 'styled-components';

import SearchSection from 'components/SearchSection';

function App() {
  return (
    <AppWrapper>
      <h1>질환명 검색하기</h1>
      <SearchSection />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d0e8fd;

  h1 {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;
