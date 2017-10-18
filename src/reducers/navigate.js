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

const setNextIndex = (navState) => {
  const { currentIndex, maxIndex } = navState;
  const nextIndex = currentIndex === null ? 0 : currentIndex + 1;
  return {
    ...navState,
    currentIndex: nextIndex < maxIndex ? nextIndex : currentIndex,
  }
};

const setPrevIndex = (navState) => {
  const { currentIndex, maxIndex } = navState;
  const nextIndex = currentIndex === null ? maxIndex : currentIndex - 1;
  return {
    ...navState,
    currentIndex: nextIndex >= 0 ? nextIndex : 0,
  };
};

const navigate = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_ROW_NEXT:
      return {
        ...state,
        [action.payload]: setNextIndex(state[action.payload]),
      };
    case NAVIGATE_ROW_PREV:
      return {
        ...state,
        [action.payload]: setPrevIndex(state[action.payload]),
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