import { combineReducers } from 'redux';
import search from './search';
import preview from './preview';
import question from './question';
import error from './error';
import headers from './headers';
import navigate from './navigate'

export default combineReducers({ search, preview, question, error, headers, navigate });