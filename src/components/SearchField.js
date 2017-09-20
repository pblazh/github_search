import identity from 'lodash/fp';
import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ onChange = identity, value = '' }) => (
	<input
		type='text'
		ref={node => node && node.focus()}
		onChange={evt => onChange(evt.target.value)}
		value={value}
		placeholder='search here' />
);

SearchField.defaultProps = {
	value: '',
	onChange: identity,
};

const shape = PropTypes.shape(
	{
		value: PropTypes.string,
		onChange: PropTypes.func,
	},
);

SearchField.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default SearchField;

export { shape };
