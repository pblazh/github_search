import React from 'react';

var Clickable = (Component, history, onClick)  => props => (
	<section onClick={() => onClick(history, props)}>
		<Component {...props} />
	</section>
);

export {
	Clickable,
};
