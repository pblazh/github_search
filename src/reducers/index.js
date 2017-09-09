import { combineReducers } from 'redux';
import { searchRequestReducer, searchResultReducer, ownersReducer, filterReducer } from './SearchReducer';

const rootReducer = combineReducers({
	filters: filterReducer,
	owners: ownersReducer,
	searchRequest: searchRequestReducer,
	foundRepositories: searchResultReducer,
});

export default rootReducer;
