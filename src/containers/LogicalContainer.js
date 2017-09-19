import React from 'react';
import PropTypes from 'prop-types';

const divider = (index, logic, onClick) => index
										? (<a
											className='App-button-small'
											role='button'
											tabIndex={index}
											key={index}
											onClick={onClick}>
												{logic}
											</a>)
										: [];

const LogicalContainer = ({ logic, onToggle, children }) => (
	<span className='App-logicalContainer'>
		{
			children.reduce((acc, item, index) =>
				acc.concat(divider(index, logic, onToggle), [item]), [])
		}
	</span>
);

LogicalContainer.propTypes = {
	logic: PropTypes.string.isRequired,
	onToggle: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default LogicalContainer;
