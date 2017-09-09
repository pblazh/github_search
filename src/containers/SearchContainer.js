import {debounce} from 'lodash-fp';
import React from 'react';
import {connect} from 'react-redux';
import {
  Link
} from 'react-router-dom'
import {searchRequest, filterBy} from '../actions';
import FilterField from '../components/FilterField';
import SearchField from '../components/SearchField';
import SearchList from '../components/SearchList';

const SearchContainer = ({search, repositories, filters, onSearch, onFilter, owners}) => (
	<div>
		<FilterField items={owners} onChange={onFilter}/>
		<SearchField value={search} onChange={onSearch}/>
		<SearchList filters={filters || []} items={repositories || []}/>
		<Link to='/'>Home</Link>
	</div>
);

const mapState2Props = (state) => (
	{
		search: state.search,
		repositories: state.foundRepositories,
		owners: state.owners,
		filters: state.filters,
	}
);

const mapDispatch2Props = (dispatch) => (
	{
		onSearch: debounce(1000, (value) => dispatch(searchRequest(value))),
		onFilter: (value) => dispatch(filterBy(value
												? {ownerId: value}
												: {})),
	}
);

export default connect(mapState2Props, mapDispatch2Props)(SearchContainer);
