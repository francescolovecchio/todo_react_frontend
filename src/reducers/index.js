import {combineReducers} from "redux";
import todos from './todos';
import error from './error';
import setFilter from './setfilter';
import lists from './lists';

export default combineReducers({todos, error, setFilter, lists});
