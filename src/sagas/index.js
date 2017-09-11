/* global document */

import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import * as api from '../api';
import {
	searchResult,
	searchFailed,
	ownersResult,
	selectRepository,
	redirect,
} from '../actions';
import {
	SEARCH_REQUEST,
	SEARCH_RESULT,
	INFO_REQUEST,
	REDIRECT,
} from '../actions/types';
import { mountPoint } from '../config';

function* requestSearch(action) {
	try {
		const results = yield call(api.searchRequest, action.payload);
		yield put(searchResult(results));
	} catch (e) {
		yield put(searchFailed(e.message));
	}
}

function* ownerSearch(action) {
	yield put(ownersResult(action.payload.map(
		repository => ({ id: repository.ownerId, name: repository.ownerName }),
	)));
}

function* searchSaga() {
	yield takeLatest(SEARCH_REQUEST, requestSearch);
}

function* ownersSaga() {
	yield takeEvery(SEARCH_RESULT, ownerSearch);
}

function* requestInfo(action) {
	try {
		const results = yield call(api.infoRequest, action.payload);
		yield put(searchResult(results));
		yield put(selectRepository(results[0].id));
	} catch (e) {
		yield put(searchFailed(e.message));
		yield put(redirect('/'));
	}
}

function* infoSaga() {
	yield takeLatest(INFO_REQUEST, requestInfo);
}

function* redirectSaga() {
	yield takeLatest(REDIRECT, (action) => {
		document.location = mountPoint + action.payload;
	});
}

export default function* rootSaga() {
	yield all([
		searchSaga(),
		ownersSaga(),
		infoSaga(),
		redirectSaga(),
	]);
}

export {
	requestSearch,
	ownerSearch,
	requestInfo,
};
