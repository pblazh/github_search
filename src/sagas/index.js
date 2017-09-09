//import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { put, takeLatest, takeEvery, all } from 'redux-saga/effects'
import * as api from '../api';
import {searchResult, searchFailed, ownersResult} from '../actions';
import {SEARCH_REQUEST, SEARCH_RESULT} from '../actions/types';

function* requestSearch (action){
	try{
		const results = yield api.searchRequest(action.payload);
		yield put(searchResult(results));
	}catch(e){
		yield put(searchFailed(e.message));
	}
}

function* ownerSearch (action){
	yield put(ownersResult(action.payload.map(repository => ({id: repository.ownerId, name: repository.ownerName}))));
}

function* searchSaga(){
	yield takeLatest(SEARCH_REQUEST, requestSearch);
}

function* ownersSaga(){
	yield takeEvery(SEARCH_RESULT, ownerSearch);
}

export default function* rootSaga() {
  yield all([
    searchSaga(),
    ownersSaga()
  ])
}
