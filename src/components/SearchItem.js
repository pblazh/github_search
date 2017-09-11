import React from 'react';
import PropTypes from 'prop-types';
import DateValue from './DateValue';

const SearchItem = ({item, onSelect=()=>{}}) => (
	<section onClick={onSelect}>
		<h3>{item.name}</h3>
		{item.language && <dl><dt>language:</dt><dd>{item.language}</dd></dl>}
		<DateValue what='created: ' date={item.createdAt}/>
		<DateValue what='updated: ' date={item.updatedAt}/>
	</section>
);

SearchItem.propTypes = {
	item: PropTypes.object.isRequired,
	onSelect: PropTypes.func,
};

export default SearchItem;
