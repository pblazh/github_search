import React from 'react';

export default ({item, onSelect}) => (
	<section onClick={onSelect}>
		<h3>{item.name}</h3>
		<h4>{item.ownerName}</h4>
		{item.description && item.description}
	</section>
);
