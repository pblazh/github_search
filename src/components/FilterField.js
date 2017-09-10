import React from 'react';
import PropTypes from 'prop-types';

const FilterField = ({what='', items, onChange}) => (
	<label>
		<span>{what} </span>
		<select onChange={(evt) => onChange(items[parseInt(evt.target.value, 10)])}>
			<option key={0} value={null}>Any</option>
			{items.map((item, index) =>
				(<option key={JSON.stringify(item)} value={index}>{item.name || item}</option>)
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
