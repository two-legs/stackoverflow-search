import {
  fetchSearchResults,
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure,
  fetchPreviewResults,
  fetchPreviewResultsSuccess,
  fetchPreviewResultsFailure,
} from './index';

import searchFetch from '../api/search';

export const search = query => async dispatch => {
  if (query) {
    dispatch(fetchSearchResults(query));
    try {
      const result = await searchFetch({ intitle: query });
      dispatch(fetchSearchResultsSuccess(result.items));
    } catch (err) {
      dispatch(fetchSearchResultsFailure(err));
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
      console.error(err);
      dispatch(fetchPreviewResultsFailure(err));
    }
  }
};