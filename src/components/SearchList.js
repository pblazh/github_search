import React from 'react';

const where = (what, list) =>
	list.filter(item =>
		Object.keys(what).reduce((pass, key) =>
			pass && item[key] === what[key], true));

export default ({filters, items, component}) => (
	<ul>
		{where(filters, items).map(item => (
			<li key={item.id}>{component({item})}</li>
		))}
	</ul>
);
