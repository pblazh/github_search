import React from 'react';
import PropTypes from 'prop-types';

const style = {
	whiteSpace: 'nowrap',
};

function getValue (value, items) {
	const contains = items.indexOf(value);
	return (contains >= 0)
		? contains + 1
		: 0;
}

const FilterField = ({ what='', selected, items, onChange }) => (
	<label style={ style }>
		<span>{ what } </span>
		<select value={ getValue(selected, items) }
			onChange={ evt => onChange(items[parseInt(evt.target.value, 10) - 1]) }>
			<option key={ 0 } value={ 0 }>Any</option>
			{items.map((item, index) =>
				(<option key={ JSON.stringify(item) } value={ index + 1 }>{ item.name || item }</option>)
			)}
		</select>
	</label>
);

FilterField.propTypes = {
	what: PropTypes.string,
	items: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default FilterField;