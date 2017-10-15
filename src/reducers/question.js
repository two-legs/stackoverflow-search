import {
  QUESTION_FETCH,
  QUESTION_FETCH_FAILURE,
  QUESTION_FETCH_SUCCESS,
} from "../actions/index";

const initialState = {
  fetchStatus: 'LOADING',
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_FETCH:
      return {
        ...state,
        fetchStatus: 'LOADING',
      };
    case QUESTION_FETCH_SUCCESS:
      return {
        ...action.payload,
        fetchStatus: 'SUCCESS',
      };
    case QUESTION_FETCH_FAILURE:
      return {
        fetchStatus: 'FAILURE',
      };
    default:
      return state;
  }
};

export default question;