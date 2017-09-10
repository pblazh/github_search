import { combineReducers } from 'redux';
import { searchRequestReducer, searchResultReducer, ownersReducer, filterReducer, idReducer } from './SearchReducer';

const rootReducer = combineReducers({
	repository: idReducer,
	filters: filterReducer,
	owners: ownersReducer,
	searchRequest: searchRequestReducer,
	repositories: searchResultReducer,
});

export default rootReducer;
