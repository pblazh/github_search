import React from 'react';

export default ({items, onChange}) => (
	<select onChange={(evt) => onChange(parseInt(evt.target.value, 10))}>
		<option key={0} value={0}>All</option>
		{items.map(item =>
			(<option key={item.id} value={item.id}>{item.name}</option>)
		)}
	</select>
);
