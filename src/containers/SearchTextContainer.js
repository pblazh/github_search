import {debounce} from 'lodash-fp';
import React from 'react';
import {connect} from 'react-redux';
import {
  Link
} from 'react-router-dom'
import {searchRequest, filterBy} from '../actions';
import SearchField from '../components/SearchField';
import SearchList from '../components/SearchList';

const SearchContainer = ({search, repository, onSearch}) => (
	<div>
		<h2>Search text</h2>
	    <h3>{ repository && repository.name }</h3>
		<SearchField value={search} onChange={onSearch}/>
	{ /*<SearchList filters={filters || []} items={repositories || []}/> */ }
		<Link to='/'>Home</Link>
		<Link to='/repository'>Search</Link>
	</div>
);

const mapState2Props = (state) => (
	{
		repository: (state.repository && state.repositories.length)
					? state.repositories.filter(repository => repository.id === state.repository).pop()
					: null,
	}
);

const mapDispatch2Props = (dispatch) => (
	{
		onSearch: debounce(1000, (value) => dispatch(searchRequest(value))),
	}
);

export default connect(mapState2Props, mapDispatch2Props)(SearchContainer);
