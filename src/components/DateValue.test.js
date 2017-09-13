/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import DateValue from './DateValue';

describe('DateValue', () => {
	it('should contain definition', () => {
		const wrapper = shallow(
			<DateValue what='what' date={new Date(1975, 2, 13)} />,
		);
		expect(wrapper.contains(<dt>what </dt>)).toBe(true);
	});

	it('should render date', () => {
		const wrapper = shallow(
			<DateValue what="what" date={new Date(1975, 2, 13)} />,
		);
		expect(wrapper.contains(<dd>13.3.1975</dd>)).toBeTruthy();
	});

	it('should render number', () => {
		const wrapper = shallow(
			<DateValue what="what" date={new Date(0)} />,
		);
		expect(wrapper.contains(<dd>1.1.1970</dd>)).toBeTruthy();
	});

	it('should render string', () => {
		const wrapper = shallow(
			<DateValue what="what" date={new Date('Mon Sep 11 2017 21:03:36 GMT+0200 (CEST)')} />,
		);

		expect(wrapper.contains(<dd>11.9.2017</dd>)).toBeTruthy();
	});
});
