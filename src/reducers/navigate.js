import {
  NAVIGATE_ROW_NEXT,
  NAVIGATE_ROW_PREV,
  SEARCH_RESULTS_FETCH_SUCCESS,
  PREVIEW_RESULTS_FETCH_SUCCESS,
} from '../actions/index';

const initialState = {
  results: {
    currentIndex: null,
    maxIndex: 0,
  },
  preview: {
    currentIndex: null,
    maxIndex: 0,
  },
};

const navigate = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_ROW_NEXT:
      const nextIndex = state.currentIndex === null ? 0 : state.currentIndex + 1;
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          currentIndex: nextIndex < state.maxIndex ? nextIndex : state.currentIndex,
        },
      };
    case NAVIGATE_ROW_PREV:
      const prevIndex = state.currentIndex === null ? state.maxIndex : state.currentIndex - 1;
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          currentIndex: prevIndex >= 0 ? prevIndex : 0,
        }
      };
    case SEARCH_RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        results: {
          currentIndex: null,
          maxIndex: action.payload && action.payload.length,
        }
      };
    case PREVIEW_RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        preview: {
          currentIndex: null,
          maxIndex: action.payload && action.payload.length,
        }
      };
    default:
      return state;
  }
};

export default navigate;