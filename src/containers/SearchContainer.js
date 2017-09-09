import React from 'react';
import {connect} from 'react-redux';
import {
  Link
} from 'react-router-dom'
import {searchRequest} from '../actions';
import SearchField from '../components/search_field';

const SearchContainer = ({search, result, onSearch}) => (
	<div>
		<SearchField value={search} onChange={onSearch}/>
		<div>{result}</div>
		<Link to='/'>Home</Link>
	</div>
);

const mapState2Props = (state) => (
	{
		search: state.search,
		result: state.result
	}
);

const mapDispatch2Props = (dispatch) => (
	{
		onSearch: (value) => dispatch(searchRequest(value))
	}
);

export default connect(mapState2Props, mapDispatch2Props)(SearchContainer);
