import React from 'react';

const Clickable = (Component, history, onClick) => props => (
	<section
		onClick={ () => onClick(history, props) }
		role='button'
		tabIndex='0' >
		<Component { ...props } />
	</section>
);

export {
// eslint-disable-next-line import/prefer-default-export
	Clickable,
};
