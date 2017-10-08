//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import {
	searchRequestReducer,
	searchResultReducer,
	searchFailedReducer,
	ownersReducer,
	languageReducer,
	filterReducer,
	logicReducer,
	selectRepositoryReducer,
} from './SearchReducer';

const rootReducer = combineReducers({
	repository: selectRepositoryReducer,
	logic: logicReducer,
	filters: filterReducer,
	owners: ownersReducer,
	languages: languageReducer,
	searchRequest: searchRequestReducer,
	repositories: searchResultReducer,
	error: searchFailedReducer,
});

export default rootReducer;
