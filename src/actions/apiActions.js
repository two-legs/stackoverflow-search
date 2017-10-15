import {
  fetchSearchResults,
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure,
  fetchPreviewResults,
  fetchPreviewResultsSuccess,
  fetchPreviewResultsFailure, fetchQuestion, fetchQuestionFailure, fetchQuestionSuccess,
} from './index';

import searchFetch from '../api/search';
import usersFetch from '../api/users';
import questionsFetch from '../api/questions';

export const search = query => async dispatch => {
  if (query) {
    dispatch(fetchSearchResults(query));
    try {
      const result = await searchFetch({ intitle: query });
      dispatch(fetchSearchResultsSuccess(result.items));
    } catch (err) {
      dispatch(fetchSearchResultsFailure(err.message));
    }
  }
};

export const getQuestionsByTag = tag => async dispatch => {
  if (tag) {
    dispatch(fetchPreviewResults('tag', tag));
    try {
      const result = await searchFetch({ tagged: tag });
      dispatch(fetchPreviewResultsSuccess(result.items));
    } catch (err) {
      dispatch(fetchPreviewResultsFailure(err.message));
    }
  }
};

export const getQuestionsByAuthor = author => async dispatch => {
  if (author) {
    dispatch(fetchPreviewResults('author', author));
    try {
      const result = await usersFetch(author.userId).questions();
      dispatch(fetchPreviewResultsSuccess(result.items));
    } catch (err) {
      dispatch(fetchPreviewResultsFailure(err.message));
    }
  }
};

export const getQuestion = questionId => async dispatch => {
  if (questionId) {
    dispatch(fetchQuestion(questionId));
    try {
      const result = await questionsFetch(questionId);
      dispatch(fetchQuestionSuccess(result.items[0]));
    } catch (err) {
      console.error(err);
      dispatch(fetchQuestionFailure(err));
    }
  }
};