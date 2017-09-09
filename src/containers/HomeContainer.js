import React from 'react';
import logo from '../images/logo.svg';

import {
  Link
} from 'react-router-dom'

export default (props) => (
	<section>
		<img src={logo} className="App-logo" alt="logo" />
		<p>text</p>
		<Link to='/search'>Search</Link>
	</section>
);
