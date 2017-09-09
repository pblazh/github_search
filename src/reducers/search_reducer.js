import { SEARCH_REQUEST, SEARCH_RESULT } from '../actions/types'

const searchRequestReducer = function(state = '', action) {
	if(action.type === SEARCH_REQUEST){
	console.log( action.type, state);
	return action.payload
		? action.payload
		: state;
	}
	return state;
}

const searchResultReducer = function(state = '', action) {
	if(action.type === SEARCH_RESULT){
	console.log( action.type, state);
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
