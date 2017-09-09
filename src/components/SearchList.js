import React from 'react';
import SearchItem from './SearchItem';

const where = (what, list) =>
	list.filter(item =>
		Object.keys(what).reduce((pass, key) =>
			pass && item[key] === what[key], true));

export default ({filters, items}) => (
	<ul>
		{where(filters, items).map(item => (
			<SearchItem key={item.id} item={item} />
		))}
	</ul>
);
