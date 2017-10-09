import { compose, uniqBy, sortBy } from 'lodash/fp';
import { fromJS } from 'immutable';
import {
	SEARCH_REQUEST,
	SEARCH_RESULT,
	SEARCH_FAILED,
	OWNERS_RESULT,
	LANGUAGE_RESULT,
	FILTER,
	TOGGLE_LOGIC,
	SELECT_REPOSITORY,
} from '../actions/types';

const requestReducer = REQUEST => (state = '', action) => {
	if (action.type === REQUEST) {
		return action.payload
			? fromJS(action.payload)
			: state;
	}
	return state;
};

const resultReducer = (REQUEST, RESULT) => (state = [], action) => {
	if (action.type === REQUEST) {
		return null;
	} else if (action.type === RESULT) {
		return action.payload
			? fromJS(action.payload)
			: state;
	}
	return state;
};
const uniqueNames = compose(uniqBy(item => item.id), sortBy('name'));

const ownersReducer = (state = [], action) => {
	if (action.type === OWNERS_RESULT) {
		return action.payload
			? fromJS(uniqueNames(action.payload))
			: state;
	}
	return state;
};

const filterEmpty = languages => languages.filter(el => Boolean(el.id));
const uniqueLangs = compose(uniqBy(item => item.id), sortBy('name'), filterEmpty);

const languageReducer = (state = [], action) =>
	(action.type === LANGUAGE_RESULT)
		? uniqueLangs(action.payload)
		: state;

const filterReducer = (state = {}, action) =>
	(action.type === FILTER)
		? fromJS(Object.assign({}, state.toJS(), action.payload))
		: state;

const logicReducer = (state = {}, action) =>
	(action.type === TOGGLE_LOGIC)
		? (state === 'and'
				? 'or'
				: 'and')
		: state;

const searchRequestReducer = requestReducer(SEARCH_REQUEST);
const searchResultReducer = resultReducer(SEARCH_REQUEST, SEARCH_RESULT);
const searchFailedReducer = resultReducer(SEARCH_REQUEST, SEARCH_FAILED);
const selectRepositoryReducer = requestReducer(SELECT_REPOSITORY);

export {
	requestReducer,
	searchRequestReducer,
	searchResultReducer,
	searchFailedReducer,
	ownersReducer,
	languageReducer,
	filterReducer,
	logicReducer,
	selectRepositoryReducer,
};
