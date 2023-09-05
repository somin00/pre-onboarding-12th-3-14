import { atom } from 'recoil';

export interface SearchResultType {
  sickCd: string;
  sickNm: string;
}

export const searchResultState = atom<SearchResultType[] | []>({
  key: 'searchResultState',
  default: [],
});
