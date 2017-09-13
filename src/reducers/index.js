import { combineReducers } from 'redux';
import { searchRequestReducer, searchResultReducer, ownersReducer, languageReducer, filterReducer, idReducer } from './SearchReducer';

const rootReducer = combineReducers({
	repository: idReducer,
	filters: filterReducer,
	owners: ownersReducer,
	languages: languageReducer,
	searchRequest: searchRequestReducer,
	repositories: searchResultReducer,
});

export default rootReducer;
