import React from 'react';
import DateValue from './DateValue';
import PropTypes from 'prop-types';

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
