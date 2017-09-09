import React from 'react';

export default ({item}) => (
	<li>
		<h3>{item.name}</h3>
		<h4>{item.ownerName}</h4>
		<a href={item.url} target='blank'>{item.url}</a>
		{item.description && item.description}
	</li>
);
