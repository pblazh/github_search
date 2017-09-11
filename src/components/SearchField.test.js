/* global describe, it, expect */

import React from 'react';
import SearchField from './SearchField';
import { shallow } from 'enzyme';

describe('SearchField', () => {
	it('should call onChange', () => {
		const onChange = jest.fn();
		const wrapper = shallow(
			<SearchField value="hello" onChange={onChange} />,
		);
		wrapper.find('input').simulate('change', { target: { value: 'world' } });

		expect(onChange.mock.calls.length).toBe(1);
		expect(onChange.mock.calls[0][0]).toBe('world');
	});
});
