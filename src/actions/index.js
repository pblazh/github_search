import {
	SEARCH_REQUEST,
	SEARCH_RESULT,
	SEARCH_FAILED,
	OWNERS_RESULT,
	LANGUAGE_RESULT,
	FILTER,
	TOGGLE_LOGIC,
	SELECT_REPOSITORY,
	INFO_REQUEST,
	REDIRECT,
} from './types';

function makeAction(type) {
	return payload => (
		{
			type,
			payload,
		}
	);
}

export const searchRequest = makeAction(SEARCH_REQUEST);
export const searchResult = makeAction(SEARCH_RESULT);
export const searchFailed = makeAction(SEARCH_FAILED);
export const ownersResult = makeAction(OWNERS_RESULT);
export const languageResult = makeAction(LANGUAGE_RESULT);
export const filter = makeAction(FILTER);
export const toggleLogic = makeAction(TOGGLE_LOGIC);
export const selectRepository = makeAction(SELECT_REPOSITORY);
export const infoRequest = makeAction(INFO_REQUEST);
export const redirect = makeAction(REDIRECT);
