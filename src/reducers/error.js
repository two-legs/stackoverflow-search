import {
  SEARCH_RESULTS_FETCH_FAILURE,
  PREVIEW_RESULTS_FETCH_FAILURE,
  QUESTION_FETCH_FAILURE,
} from '../actions';

const initialState = { message: '' };

const error = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS_FETCH_FAILURE:
    case PREVIEW_RESULTS_FETCH_FAILURE:
    case QUESTION_FETCH_FAILURE:
      return { message: action.payload };
    default:
      return { message: '' };
  }
};

export default error;