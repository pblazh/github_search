/* global describe, it, expect */

import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import {
	requestSearch,
	requestInfo,
} from './';

import * as actions from '../actions';

describe('sagas', () => {
	describe('searh saga', () => {
		const payload = {};
		const action = { payload };

		it('should request search', () => {
			const saga = requestSearch(action);

			const searchRequest = saga.next();
			const expectedRequest = call(api.searchRequest, payload);
			expect(searchRequest.value).toMatchObject(expectedRequest);

			const searchResult = saga.next(payload);
			const expectedResult = put(actions.searchResult(payload));
			expect(searchResult.value).toMatchObject(expectedResult);
		});

		it('should fail search', () => {
			const saga = requestSearch(action);

			saga.next();
			const searchResult = saga.throw({ message: payload });
			const expectedResult = put(actions.searchFailed(payload));
			expect(searchResult.value).toMatchObject(expectedResult);
		});
	});

	describe('info saga', () => {
		const payload = {};
		const action = { payload };

		it('should request info', () => {
			const saga = requestInfo(action);

			const infoRequest = saga.next();
			const expectedRequest = call(api.infoRequest, payload);
			expect(infoRequest.value).toMatchObject(expectedRequest);

			const infoResult = saga.next(payload);
			const expectedResult = put(actions.searchResult(payload));
			expect(infoResult.value).toMatchObject(expectedResult);
		});

		it('should fail info', () => {
			const saga = requestSearch(action);

			saga.next();
			const infoResult = saga.throw({ message: payload });
			const expectedResult = put(actions.searchFailed(payload));
			expect(infoResult.value).toMatchObject(expectedResult);
		});
	});
});
