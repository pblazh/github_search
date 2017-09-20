import { combineReducers } from 'redux';
import {
	searchRequestReducer,
	searchResultReducer,
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
});

export default rootReducer;
