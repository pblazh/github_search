import React from 'react';
import PropTypes from 'prop-types';
import DateValue, {dateShape} from './DateValue';

const SearchItem = ({item, onSelect=() => {}}) => (
	<section onClick={onSelect}>
		<h3>{item.name}</h3>
		{item.language && <dl><dt>language:</dt><dd>{item.language}</dd></dl>}
		<DateValue what='created: ' date={item.createdAt}/>
		<DateValue what='updated: ' date={item.updatedAt}/>
	</section>
);

SearchItem.defaultProps = {
	onSelect: () => {},
};

SearchItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		language: PropTypes.string,
		createdAt: dateShape,
		updatedAt: dateShape,
	}).isRequired,
	onSelect: PropTypes.func,
};

export default SearchItem;
