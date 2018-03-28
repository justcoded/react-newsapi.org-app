import urlBuilder                            from 'lil-uri';
import { API_KEY, HOSTNAME, PATH, PROTOCOL } from '../constants/api';

const settings = {
  method: 'get',
  headers: {
    'X-Api-Key': API_KEY
  }
};

export const searchByTopHeadlines = (params) => {
  const query = {
    category: params.category === 'all categories' ? undefined : params.category,
    country: params.country.code,
    q: params.q
  };

  const url = urlBuilder()
    .protocol(PROTOCOL)
    .hostname(HOSTNAME)
    .path(PATH)
    .query(query)
    .build();

  return fetch(encodeURI(url), settings)
};