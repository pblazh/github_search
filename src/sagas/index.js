import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {request} from '../api';
import {searchRequest, searchResult, searchFailed} from '../actions';
import {SEARCH_REQUEST} from '../actions/types';

function requestSearch* (action){
	try{
		const results = yield request(action.payload);
		yield put(searchResult(results));
	}catch(e){
		yield put(searchFailed(e.message));
	}
}

function searchSaga*(){
	yield takeEvery(SEARCH_REQUEST, requestSearch);
}

export default searchSaga;
