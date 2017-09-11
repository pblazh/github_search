import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ onChange=() => {}, value='' }) => (
	<input type='text'
		ref={ (node) => {node && node.focus(); }}
		onChange={ (evt) => onChange(evt.target.value) }
		value={ value }
		placeholder='search here'/>
);

SearchField.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default SearchField;
