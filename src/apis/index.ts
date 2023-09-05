import axios from 'axios';

const BASE_URL = 'http://localhost:4000/sick';

export const getSearchWords = async (debouncedValue: string) => {
  try {
    const data = await axios.get(`${BASE_URL}?q=${debouncedValue}`);
    return data.data;
  } catch (e) {
    throw new Error('검색어에 대한 결과를 가져오지 못했습니다.');
  }
};
