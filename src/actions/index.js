import {
	SEARCH_REQUEST,
	SEARCH_RESULT,
	SEARCH_FAILED,
	OWNERS_RESULT,
	LANGUAGE_RESULT,
	FILTER_BY,
	SELECT_REPOSITORY,
	INFO_REQUEST,
	REDIRECT,
} from './types';

function action(type, payload) {
	return {
		type,
		payload,
	};
}

export const searchRequest = payload => action(SEARCH_REQUEST, payload);
export const searchResult = payload => action(SEARCH_RESULT, payload);
export const searchFailed = payload => action(SEARCH_FAILED, payload);
export const ownersResult = payload => action(OWNERS_RESULT, payload);
export const languageResult = payload => action(LANGUAGE_RESULT, payload);
export const filterBy = payload => action(FILTER_BY, payload);
export const selectRepository = payload => action(SELECT_REPOSITORY, payload);
export const infoRequest = payload => action(INFO_REQUEST, payload);
export const redirect = payload => action(REDIRECT, payload);
