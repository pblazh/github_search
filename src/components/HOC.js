import React from 'react';

const Clickable = (Component, history, onClick) => props => (
	<Component onClick={ () => onClick(history, props) } {...props} />
);

export {
	Clickable,
};
