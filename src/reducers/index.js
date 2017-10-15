import { combineReducers } from 'redux';
import search from './search';
import preview from './preview';
import question from './question';

export default combineReducers({ search, preview, question });