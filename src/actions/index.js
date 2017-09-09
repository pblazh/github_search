import { SEARCH_REQUEST, SEARCH_RESULT, SEARCH_FAILED, OWNERS_RESULT, FILTER_BY} from './types'

function action(type, payload) {
  return {
    type,
    payload
  }
}

const searchRequest = (payload) => action(SEARCH_REQUEST, payload);
const searchResult = (payload) => action(SEARCH_RESULT, payload);
const searchFailed = (payload) => action(SEARCH_FAILED, payload);

const ownersResult = (payload) => action(OWNERS_RESULT, payload);
const filterBy = (payload) => action(FILTER_BY, payload);

export{
	searchRequest,
	searchResult,
	searchFailed,
	ownersResult,
	filterBy
};
