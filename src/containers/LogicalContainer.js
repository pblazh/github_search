import React from 'react';

const divider = (index, logic, onClick) => index
										? (<a className='App-button-small'
												key={index}
												onClick={onClick}>
													{logic}
											</a>)
										: [];

export default ({ logic, onToggle, children }) => (
	<span className='App-logicalContainer'>
		{
			children.reduce((acc, item, index) =>
				acc.concat(divider(index, logic, onToggle), [item]), [])
		}
	</span>
);
