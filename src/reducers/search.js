import {
  SEARCH_QUERY_SET,
  SEARCH_RESULTS_FETCH,
  SEARCH_RESULTS_FETCH_SUCCESS,
  SEARCH_RESULTS_FETCH_FAILURE,
} from '../actions';

import { sort, toggleSort} from './sort';
import {SEARCH_RESULTS_TOGGLE_SORT} from "../actions/index";

const initialState = {
  query: '',
  results: [],
  fetchStatus: 'SUCCESS',
  sort: { field: '', order: 'desc' },
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
        results: sort(action.payload, state.sort),
        fetchStatus: 'SUCCESS',
      };
    case SEARCH_RESULTS_FETCH_FAILURE:
      return {
        ...state,
        results: [],
        fetchStatus: 'FAILURE',
      };
    case SEARCH_RESULTS_TOGGLE_SORT:
      return {
        ...state,
        ...toggleSort(state, action.payload),
      };
    default:
      return state;
  }
};

export default search;