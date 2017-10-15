import {
  PREVIEW_CLOSE,
  PREVIEW_RESULTS_FETCH,
  PREVIEW_RESULTS_FETCH_SUCCESS,
  PREVIEW_RESULTS_FETCH_FAILURE,
} from '../actions';

const initialState = {
  type: '',
  results: [],
  fetchStatus: 'SUCCESS',
  isOpened: false,
};

const getTitleByType = (type, query) => {
  return type === 'tag' ? `Questions by tag "${query}"` : `Questions from ${query.displayName}`;
};

const preview = (state = initialState, action) => {
  switch (action.type) {
    case PREVIEW_CLOSE:
      return { ...state, isOpened: false };
    case PREVIEW_RESULTS_FETCH:
      return {
        ...state,
        ...action.payload,
        title: getTitleByType(action.payload.type, action.payload.query),
        isOpened: true,
        fetchStatus: 'LOADING',
      };
    case PREVIEW_RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        fetchStatus: 'SUCCESS',
      };
    case PREVIEW_RESULTS_FETCH_FAILURE:
      return {
        ...state,
        results: [],
        isOpened: false,
        fetchStatus: 'FAILURE',
      };
    default:
      return state;
  }
};

export default preview;