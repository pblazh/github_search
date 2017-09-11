import { compose, uniqBy, sortBy } from 'lodash/fp';
import { SEARCH_REQUEST, SEARCH_RESULT, OWNERS_RESULT, FILTER_BY } from '../actions/types';

const requestReducer = REQUEST => (state = '', action) => {
	if (action.type === REQUEST) {
		return action.payload
			? action.payload
			: state;
	}
	return state;
};

const resultReducer = (REQUEST, RESULT) => (state = [], action) => {
	if (action.type === REQUEST) {
		return null;
	} else if (action.type === RESULT) {
		return action.payload
			? action.payload
			: state;
	}
	return state;
};
const uniqueNames = compose(uniqBy(item => item.id), sortBy('name'));

const ownersReducer = (state = [], action) => {
	if (action.type === OWNERS_RESULT) {
		return action.payload
			? uniqueNames(action.payload)
			: state;
	}
	return state;
};

const idReducer = (state = null, action) => (action.payload
	? action.payload
	: state);

const filterReducer = requestReducer(FILTER_BY);
const searchRequestReducer = requestReducer(SEARCH_REQUEST);
const searchResultReducer = resultReducer(SEARCH_REQUEST, SEARCH_RESULT);

export {
	requestReducer,
	searchRequestReducer,
	searchResultReducer,
	ownersReducer,
	filterReducer,
	idReducer,
};