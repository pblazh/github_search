import { combineReducers } from 'redux';
import {
	searchRequestReducer,
	searchResultReducer,
	ownersReducer,
	languageReducer,
	filterReducer,
	logicReducer,
	idReducer,
} from './SearchReducer';

const rootReducer = combineReducers({
	repository: idReducer,
	logic: logicReducer,
	filters: filterReducer,
	owners: ownersReducer,
	languages: languageReducer,
	searchRequest: searchRequestReducer,
	repositories: searchResultReducer,
});

export default rootReducer;
