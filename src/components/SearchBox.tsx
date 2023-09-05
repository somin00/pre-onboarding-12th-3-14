import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState } from 'react';

import { styled } from 'styled-components';

import useDebounce from 'hooks/useDebounce';
import useFetch from 'hooks/useFetch';

interface SearchBoxPropsType {
  isAutoSearch: boolean;
  setIsAutoSearch: Dispatch<SetStateAction<boolean>>;
  autoKeyword: string;
  setFocusIndex: Dispatch<SetStateAction<number>>;
  pressKey: (e: KeyboardEvent<HTMLInputElement>) => void;
}
function SearchBox({
  isAutoSearch,
  setIsAutoSearch,
  autoKeyword,
  setFocusIndex,
  pressKey,
}: SearchBoxPropsType) {
  const [input, setInput] = useState<string>('');
  const debouncedValue = useDebounce(input);
  useFetch(debouncedValue);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (isAutoSearch) {
      const nativeEvent = e.nativeEvent as InputEvent;
      const additionalValue =
        nativeEvent.inputType === 'deleteContentBackward' ? '' : nativeEvent.data;
      if (additionalValue === null) return;
      setInput(autoKeyword + additionalValue);
      setIsAutoSearch(false);
      setFocusIndex(-1);
      return;
    }
    setInput(e.currentTarget.value);
  };

  return (
    <SearchBoxWrapper>
      <img src='/assets/glass.svg' alt='돋보기' width='20' height='20' />
      <label htmlFor='seach-word' className='a11y-hidden'>
        검색어 입력창
      </label>
      <input
        type='text'
        id='seach-word'
        value={isAutoSearch ? autoKeyword : input}
        onChange={changeInput}
        onKeyDown={pressKey}
        placeholder='질환명을 입력해 주세요.'
      />
      <button type='button'>검색</button>
    </SearchBoxWrapper>
  );
}

export default SearchBox;

const SearchBoxWrapper = styled.form`
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 20px;
  padding-left: 20px;

  &:focus-within {
    outline: 2px solid blue;
  }

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

    &:focus {
      outline: none;
    }
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
