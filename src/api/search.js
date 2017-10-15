import qs from 'qs';
import { API_URL } from './config';
import keysToCamelCase from '../utils/keysToCamelCase';

const defaultSearchParams = {
  pagesize: 50,
  order: 'desc',
  sort: 'activity',
  site: 'stackoverflow',
};

export default async function search(params) {
  const searchParams = { ...defaultSearchParams, ...params };
  const response = await fetch(`${API_URL}/search?${qs.stringify(searchParams)}`);
  if (response.status >= 400 && response.status < 600) {
    const error = await  response.json();
    throw new Error(error.error_message || 'Bad server request');
  }
  const result = await response.json();
  return keysToCamelCase(result);
}