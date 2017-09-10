import React from 'react';
import PropTypes from 'prop-types';

const where = (what, list) =>
	list.filter(item =>
		Object.keys(what).reduce((pass, key) =>
			pass && item[key] === what[key], true));

const SearchList = ({filters={}, items, component}) => (
	<ul>
		{where(filters, items).map(item => (
			<li key={item.id}>{component({item})}</li>
		))}
	</ul>
);

SearchList.propTypes = {
	component: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired,
	filter: PropTypes.object,
};

export default SearchList;
