import React from 'react';
import PropTypes from 'prop-types';

const date2string = date => [
	date.getDate(),
	date.getMonth() + 1,
	date.getFullYear(),
].join('.');

const DateValue = ({ what, date }) => (
	<dl>
		<dt>{ what } </dt>
		<dd>{ date2string(new Date(date)) }</dd>
	</dl>
);

DateValue.propTypes = {
	what: PropTypes.string.isRequired,
	date: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.instanceOf(Date),
	]).isRequired,
};

export default DateValue;
