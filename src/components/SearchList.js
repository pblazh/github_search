import React from 'react';
import PropTypes from 'prop-types';
import {where} from '../util';
// eslint-disable-next-line no-unused-vars
import style from '../stylesheets/App-searchlist.css';

const SearchList = ({filters={}, items, component}) => (
	<section className='App-searchlist'>
		{where(filters, items).map(item => (
			<div  className='App-searchlistItem' key={item.id}>{component({item})}</div>
		))}
	</section>
);

SearchList.propTypes = {
	component: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired,
	filter: PropTypes.object,
};

export default SearchList;
