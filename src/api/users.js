import qs from 'qs';
import { API_URL } from './config';
import keysToCamelCase from '../utils/keysToCamelCase';;

const defaultParams = {
  pagesize: 10,
  order: 'desc',
  sort: 'activity',
  site: 'stackoverflow',
};

async function query(url, params, defaultParams) {
  const searchParams = { ...defaultParams, ...params };
  const response = await fetch(`${url}?${qs.stringify(searchParams)}`);
  if (response.status >= 400 && response.status < 600) {
    const error = await  response.json();
    throw new Error(error.error_message || 'Bad server request');
  }

  const result = await response.json();
  return keysToCamelCase(result);
}

export async function usersQuestions(userUrl, params) {
  return await query(`${userUrl}/questions`, params, defaultParams);
}

export default function users(ids) {
  const queryIds = ids instanceof Array ? ids.join(';') : ids;
  const url = `${API_URL}/users/${queryIds}`;
  return {
    questions: async params => usersQuestions(url, params),
  }
}