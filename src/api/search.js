import qs from 'qs';
import fetch from 'whatwg-fetch';
import API_URL from './config';

const defaultSearchParams = {
  pagesize: 100,
  order: 'desc',
  sort: 'activity',
};

export default async function search(params) {
  const searchParams = { ...defaultSearchParams, ...params };
  const response = await fetch(`${API_URL}/search?${qs.stringify(searchParams)}`);
  if (response.status > 400 && response.status < 600) {
    throw new Error(response.error_message || 'Bad server request');
  }

  return response.json();
}