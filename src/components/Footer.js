import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import style from '../stylesheets/App-footer.css';

const Footer = ({ buttons = [] }) => (
	<footer className='App-footer'>
		<aside>2017.09.10</aside>
		{buttons.map(button => (
			<Link
				className='App-button'
				key={button.to + button.name}
				to={button.to}>
			{button.icon && (<span className='App-button-icon'>{button.icon}</span>)}
			<span className='App-button-label'>{button.name}</span>
			</Link>
		))}
	</footer>
);

Footer.defaultProps = {
  buttons: [],
};

Footer.propTypes = {
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			to: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			icon: PropTypes.string,
		}),
	),
};

export default Footer;
