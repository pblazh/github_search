/* global describe, it, expect */

import { requestReducer, idReducer, ownersReducer } from './SearchReducer';
import { ownersResult } from '../actions';

const payload = {};
const action = pd => ({ type: 0, payload: pd });

describe('reducers', () => {
	describe('requestReducer', () => {
		it('should check type', () => {
			const state = requestReducer(1)('', action(payload));
			expect(state).toBe('');
		});
		it('should pass payload', () => {
			const state = requestReducer(0)('', action(payload));
			expect(state).toBe(payload);
		});
	});

	describe('idReducer', () => {
		it('should not check type', () => {
			const state = idReducer('', action(payload));
			expect(state).toBe(payload);
		});
		it('should pass payload', () => {
			const state = idReducer('', action(payload));
			expect(state).toBe(payload);
		});
	});

	describe('ownersReducer', () => {
		it('should remove duplicates', () => {
			const owners = [
				{ id: 1, name: 'c' },
				{ id: 2, name: 'a' },
				{ id: 3, name: 'b' },
				{ id: 2, name: 'a' },
			];
			const expected = [
				{ id: 2, name: 'a' },
				{ id: 3, name: 'b' },
				{ id: 1, name: 'c' },
			];
			const state = ownersReducer('', ownersResult(owners));
			expect(state).toMatchObject(expected);
		});
	});
});

