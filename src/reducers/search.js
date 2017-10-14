import {
  SEARCH_QUERY_SET,
  SEARCH_RESULTS_FETCH,
  SEARCH_RESULTS_FETCH_SUCCESS,
  SEARCH_RESULTS_FETCH_FAILURE,
} from '../actions';

const initialState = {
  query: '',
  results: [],
  fetchStatus: 'SUCCESS',
};


const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY_SET:
      return { ...state, query: action.payload };
    case SEARCH_RESULTS_FETCH:
      return {
        ...state,
        query: action.payload,
        fetchStatus: 'LOADING',
      };
    case SEARCH_RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        fetchStatus: 'SUCCESS',
      };
    case SEARCH_RESULTS_FETCH_FAILURE:
      return {
        ...state,
        results: [],
        fetchStatus: 'FAILURE',
      };
    default:
      return state;
  }
};

export default search;