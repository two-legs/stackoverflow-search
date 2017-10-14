export const SEARCH_QUERY_SET ='SEARCH_QUERY_SET';
export const SEARCH_RESULTS_FETCH = 'SEARCH_RESULTS_FETCH';
export const SEARCH_RESULTS_FETCH_SUCCESS = 'SEARCH_RESULTS_FETCH_SUCCESS';
export const SEARCH_RESULTS_FETCH_FAILURE = 'SEARCH_RESULTS_FETCH_FAILURE';

export const PREVIEW_RESULTS_FETCH = 'PREVIEW_RESULTS_FETCH';
export const PREVIEW_RESULTS_FETCH_SUCCESS = 'PREVIEW_RESULTS_FETCH_SUCCESS';
export const PREVIEW_RESULTS_FETCH_FAILURE = 'PREVIEW_RESULTS_FETCH_FAILURE';
export const PREVIEW_CLOSE = 'PREVIEW_CLOSE';

export const ANSWERS_FETCH = 'ANSWERS_FETCH';
export const ANSWERS_FETCH_SUCCESS = 'ANSWERS_FETCH_SUCCESS';
export const ANSWERS_FETCH_FAILURE = 'ANSWERS_FETCH_FAILURE';

export const setQuery = query => ({
  type: SEARCH_QUERY_SET,
  payload: query,
});

export const fetchSearchResults = query => ({
  type: SEARCH_RESULTS_FETCH,
  payload: query,
});

export const fetchSearchResultsSuccess = results => ({
  type: SEARCH_RESULTS_FETCH_SUCCESS,
  payload: results,
});

export const fetchSearchResultsFailure = err => ({
  type: SEARCH_RESULTS_FETCH_FAILURE,
  payload: err,
});

export const fetchPreviewResults = (type, query) => ({
  type: PREVIEW_RESULTS_FETCH,
  payload: { type, query }
});

export const fetchPreviewResultsSuccess = results => ({
  type: PREVIEW_RESULTS_FETCH_SUCCESS,
  payload: results,
});

export const fetchPreviewResultsFailure = err => ({
  type: PREVIEW_RESULTS_FETCH_FAILURE,
  payload: err,
});

export const closePreview = () => ({
  type: PREVIEW_CLOSE,
});