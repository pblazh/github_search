/* global describe, it, expect */

import { where } from './';

const list = [
	{ one: 1, two: 2 },
	{ one: 1, two: '2' },
	{ three: '3' },
];

describe('where should select elements', () => {
	it('select elements from array using a sample', () => {
		const selector = { one: 1 };
		const selected = [
			{ one: 1, two: 2 },
			{ one: 1, two: '2' },
		];
		expect(where(selector, list)).toMatchObject(selected);
	});


	it('return empty array if selector is not found', () => {
		const selector = { one: 0 };
		const selected = [];
		expect(where(selector, list)).toMatchObject(selected);
	});
});
