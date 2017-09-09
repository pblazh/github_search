import { SEARCH_REQUEST, SEARCH_RESULT } from '../actions/types'

const searchRequestReducer = function(state = '', action) {
	if(action.type === SEARCH_REQUEST){
	return action.payload
		? action.payload
		: state;
	}
	return state;
}

const searchResultReducer = function(state = '', action) {
	if(action.type === SEARCH_RESULT){
	return action.payload
		? action.payload
		: state;
	}
	return state;
}

export {
	searchRequestReducer,
	searchResultReducer
};
