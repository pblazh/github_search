import { SEARCH_REQUEST, SEARCH_RESULT, SEARCH_FAILED } from './types'

function action(type, payload) {
  return {
    type,
    payload
  }
}

const searchRequest = (payload) => action(SEARCH_REQUEST, payload);
const searchResult = (payload) => action(SEARCH_RESULT, payload);
const searchFailed = (payload) => action(SEARCH_FAILED, payload);

export{searchRequest, searchResult, searchFailed}
