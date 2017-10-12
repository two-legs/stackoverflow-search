import qs from 'qs';
import fetch from 'whatwg-fetch';
import API_URL from './config';

const defaultParams = {
  pagesize: 10,
  order: 'desc',
  sort: 'activity',
};

async function query(url, params, defaultParams) {
  const searchParams = { ...defaultParams, ...params };
  const response = await fetch(`${url}?${qs.stringify(searchParams)}`);
  if (response.status > 400 && response.status < 600) {
    throw new Error(response.error_message || 'Bad server request');
  }

  return response.json();
}

export async function usersQuestions(userUrl, params) {
  return await query(`${userUrl}/questions`, params, defaultParams);
}

export default async function users(ids) {
  const queryIds = ids instanceof Array ? ids.join(';') : ids;
  const url = `${API_URL}/users/${queryIds}`;
  return {
    questions: params => usersQuestions(url, params),
  }
}