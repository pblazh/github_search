import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/main.css';

const AppContainer = props => (
	<div className='appContainer'>
		<header className='App-header'>Github search</header>
		{props.children}
	</div>
);

AppContainer.defaultProps = {
	children: null,
};

AppContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default AppContainer;
