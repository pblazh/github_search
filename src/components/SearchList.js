import React from 'react';
import PropTypes from 'prop-types';
import { where, any } from '../util';
// eslint-disable-next-line no-unused-vars
import style from '../stylesheets/App-searchlist.css';

const filter = (logic, filters, items) =>
					logic === 'and'
					? where(filters, items)
					: any(filters, items);

const SearchList = ({ filters = {}, logic, items, component }) => (
	<section className='App-searchlist'>
		{filter(logic, filters, items).map(item => (
			<div className='App-searchlistItem' key={item.id}>{component({ item })}</div>
		))}
	</section>
);

SearchList.defaultProps = {
  filters: {},
  logic: 'and',
};

SearchList.propTypes = {
	component: PropTypes.func.isRequired,
	items: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number,
				]),
			}),
		).isRequired,
// eslint-disable-next-line react/forbid-prop-types
	filters: PropTypes.object,
	logic: PropTypes.oneOf(['and', 'or']),
};

export default SearchList;
