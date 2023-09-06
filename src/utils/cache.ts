import { HEADER_FETCH_DATE, EXPIRE_TIME } from 'constants/cacheConfig';

import { SearchResultType } from 'store/searchResult';

export const checkIsExpired = (cacheResponse: Response) => {
  const cachedData = cacheResponse.headers.get(HEADER_FETCH_DATE);

  if (!cachedData) return;

  const cacheDataDate = new Date(cachedData).getTime();
  const today = new Date().getTime();

  return today - cacheDataDate > EXPIRE_TIME;
};

export const setCachedData = async (
  cacheName: string,
  url: string,
  response: SearchResultType[],
) => {
  const cache = await caches.open(cacheName);
  const jsonResponse = new Response(JSON.stringify(response));

  const clonedReponse = jsonResponse.clone();
  const blobResponse = await clonedReponse.blob();
  const newHeaders = new Headers(clonedReponse.headers);
  newHeaders.append(HEADER_FETCH_DATE, new Date().toISOString());

  const newResponse = new Response(blobResponse, {
    status: clonedReponse.status,
    statusText: clonedReponse.statusText,
    headers: newHeaders,
  });

  cache.put(url, newResponse);
};

export const getCachedData = async (cacheName: string, url: string) => {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    if (checkIsExpired(cachedResponse)) {
      await cache.delete(url);
      return null;
    }

    return await cachedResponse.json();
  } catch (error) {
    return false;
  }
};
