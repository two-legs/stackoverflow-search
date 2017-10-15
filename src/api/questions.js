import qs from 'qs';
import { API_URL, FILTER } from './config';
import keysToCamelCase from '../utils/keysToCamelCase';

const defaultParams = {
  order: 'desc',
  sort: 'activity',
  site: 'stackoverflow',
  filter: FILTER,
};

export default async function question(questionId, params) {
  const requestParams = { ...defaultParams, ...params };
  const response = await fetch(`${API_URL}/questions/${questionId}?${qs.stringify(requestParams)}`);
  if (response.status >= 400 && response.status < 600) {
    const error = await  response.json();
    throw new Error(error.error_message || 'Bad server request');
  }
  const result = await response.json();
  return keysToCamelCase(result);
}