import React from 'react';

const Clickable = (Component, history, onClick) => props => (
	<section onClick={ () => onClick(history, props) }>
		<Component { ...props } />
	</section>
);

export {
	Clickable,
};
