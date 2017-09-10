import {
	SEARCH_REQUEST,
	SEARCH_RESULT,
	SEARCH_FAILED,
	OWNERS_RESULT,
	FILTER_BY,
	SELECT_REPOSITORY
} from './types'

function action(type, payload) {
  return {
    type,
    payload
  }
}

export const searchRequest = (payload) => action(SEARCH_REQUEST, payload);
export const searchResult = (payload) => action(SEARCH_RESULT, payload);
export const searchFailed = (payload) => action(SEARCH_FAILED, payload);
export const ownersResult = (payload) => action(OWNERS_RESULT, payload);
export const filterBy = (payload) => action(FILTER_BY, payload);
export const selectRepository = (payload) => action(SELECT_REPOSITORY, payload);
