import axios from 'axios';
import { getCachedData, setCachedData } from 'utils/cache';

const BASE_URL = 'http://localhost:4000/sick';

export const getSearchWords = async (debouncedValue: string) => {
  try {
    const cacheName = `cache_${debouncedValue}`;
    const queryUrl = `${BASE_URL}?q=${debouncedValue}`;

    const cachedData = await getCachedData(cacheName, queryUrl);

    if (cachedData) return cachedData;

    const data = await axios.get(queryUrl);
    await setCachedData(cacheName, queryUrl, data.data);
    console.info('calling api');

    return data.data;
  } catch (e) {
    throw new Error('검색어에 대한 결과를 가져오지 못했습니다.');
  }
};
