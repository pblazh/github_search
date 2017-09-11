/* global describe, it, expect */

import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
	it('should render links', () => {
		const wrapper = shallow(
			<Footer buttons={[
				{ to: 'to1', name: 'name1' },
				{ to: 'to2', name: 'name2' },
			]} />,
		);

		expect(wrapper.contains(<Link className="App-button" to="to0">name0</Link>)).toBeFalsy();
		expect(wrapper.contains(<Link className="App-button" to="to1">name1</Link>)).toBeTruthy();
		expect(wrapper.contains(<Link className="App-button" to="to2">name2</Link>)).toBeTruthy();
	});
});
