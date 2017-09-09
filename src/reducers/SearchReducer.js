import { SEARCH_REQUEST, SEARCH_RESULT, OWNERS_RESULT, FILTER_BY } from '../actions/types'
import {compose, uniqBy, sortBy} from 'lodash/fp';

const requestReducer = REQUEST => (state = '', action) => {
	if(action.type === REQUEST){
		return action.payload
			? action.payload
			: state;
	}
	return state;
}

const resultReducer = (REQUEST, RESULT) => (state = [], action) => {
	if(action.type === SEARCH_REQUEST){
		return null;
	}
	else if(action.type === SEARCH_RESULT){
		return action.payload
			? action.payload
			: state;
	}
	return state;
}
const uniqueNames = compose(uniqBy(item => item.id), sortBy('name'));

const ownersReducer = (state = [], action) => {
	if(action.type === OWNERS_RESULT){
		return action.payload
			? uniqueNames(action.payload)
			: state;
	}
	return state;
}
const filterReducer = requestReducer(FILTER_BY);
const searchRequestReducer = requestReducer(SEARCH_REQUEST);
const searchResultReducer = resultReducer(SEARCH_REQUEST, SEARCH_RESULT);

export {
	searchRequestReducer,
	searchResultReducer,
	ownersReducer,
	filterReducer,
};
