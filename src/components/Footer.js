import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Footer = ({buttons=[]}) => (
	<footer className='App-footer'>
	<aside>2017.09.10</aside>
	{buttons.map(button  => (<Link className='App-button' key={button.to + button.name} to={button.to}>{button.name}</Link>))}
	</footer>
);

Footer.propTypes = {
	buttons: PropTypes.array,
};

export default Footer;
