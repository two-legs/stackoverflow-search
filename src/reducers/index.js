import { combineReducers } from 'redux';
import search from './search';
import preview from './preview';

export default combineReducers({ search, preview });