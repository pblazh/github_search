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


		expect(wrapper.contains(<Link className='App-button' to='to0'>name0</Link>)).toBeFalsy();
		// eslint-disable-next-line max-len
		expect(wrapper.contains(<Link className='App-button' to='to1'><span className='App-button-label'>name1</span></Link>)).toBeTruthy();
		// eslint-disable-next-line max-len
		expect(wrapper.contains(<Link className='App-button' to='to2'><span className='App-button-label'>name2</span></Link>)).toBeTruthy();
	});
});
