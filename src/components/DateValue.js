import React from 'react';
import PropTypes from 'prop-types';

const date2string = date => [
	date.getDate(),
	date.getMonth() + 1,
	date.getFullYear(),
].join('.');

const DateValue = ({what, date}) => (
	<dl>
		<dt>{what} </dt>
		<dd>{date2string(new Date(date))}</dd>
	</dl>
);

export const dateShape = PropTypes.oneOfType([
	PropTypes.number,
	PropTypes.string,
	PropTypes.instanceOf(Date),
]);

DateValue.propTypes = {
	what: PropTypes.string.isRequired,
	date: dateShape.isRequired,
};

export default DateValue;
