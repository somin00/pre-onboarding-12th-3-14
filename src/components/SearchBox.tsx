import React from 'react';

import { styled } from 'styled-components';

function SearchBox() {
  return (
    <SearchBoxWrapper>
      <img src='/assets/glass.svg' alt='돋보기' width='20' height='20' />
      <input type='text' />
      <button type='button'>검색</button>
    </SearchBoxWrapper>
  );
}

export default SearchBox;

const SearchBoxWrapper = styled.div`
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 20px;
  padding-left: 20px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  input {
    width: 400px;
    height: 50px;
    border: none;
    font-size: 1.2rem;
    padding-left: 10px;
  }

  button {
    cursor: pointer;
    width: 80px;
    height: 52px;
    border: none;
    font-size: 1.2rem;
    background-color: rgba(35, 131, 226);
    color: white;
  }
`;
