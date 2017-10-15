import { combineReducers } from 'redux';
import search from './search';
import preview from './preview';
import question from './question';
import error from './error';

export default combineReducers({ search, preview, question, error });