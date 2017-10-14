import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const initialState = {};

const store = createStore(reducer, initialState, compose(
  applyMiddleware(thunk),
  (typeof window !== 'undefined' && window.devToolsExtension)
    ? window.devToolsExtension()
    : f => f,
  ));

export default store;