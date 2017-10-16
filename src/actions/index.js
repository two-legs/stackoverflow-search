export const SEARCH_QUERY_SET ='SEARCH_QUERY_SET';
export const SEARCH_RESULTS_FETCH = 'SEARCH_RESULTS_FETCH';
export const SEARCH_RESULTS_FETCH_SUCCESS = 'SEARCH_RESULTS_FETCH_SUCCESS';
export const SEARCH_RESULTS_FETCH_FAILURE = 'SEARCH_RESULTS_FETCH_FAILURE';
export const SEARCH_RESULTS_TOGGLE_SORT = 'SEARCH_RESULTS_TOGGLE_SORT';

export const PREVIEW_RESULTS_FETCH = 'PREVIEW_RESULTS_FETCH';
export const PREVIEW_RESULTS_FETCH_SUCCESS = 'PREVIEW_RESULTS_FETCH_SUCCESS';
export const PREVIEW_RESULTS_FETCH_FAILURE = 'PREVIEW_RESULTS_FETCH_FAILURE';
export const PREVIEW_RESULTS_TOGGLE_SORT ='PREVIEW_RESULTS_TOGGLE_SORT';
export const PREVIEW_CLOSE = 'PREVIEW_CLOSE';

export const QUESTION_FETCH = 'QUESTION_FETCH';
export const QUESTION_FETCH_SUCCESS = 'QUESTION_FETCH_SUCCESS';
export const QUESTION_FETCH_FAILURE = 'QUESTION_FETCH_FAILURE';

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

export const sortSearchResults = field => ({
  type: SEARCH_RESULTS_TOGGLE_SORT,
  payload: field,
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

export const sortPreviewResults = field => ({
  type: PREVIEW_RESULTS_TOGGLE_SORT,
  payload: field,
});

export const closePreview = () => ({
  type: PREVIEW_CLOSE,
});

export const fetchQuestion = id => ({
  type: QUESTION_FETCH,
  payload: id,
});

export const fetchQuestionSuccess = result => ({
  type: QUESTION_FETCH_SUCCESS,
  payload: result,
});

export const fetchQuestionFailure = err => ({
  type: QUESTION_FETCH_FAILURE,
  payload: err,
});