import {debounce} from 'lodash-fp';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {
	searchRequest,
	filterBy,
	selectRepository,
} from '../actions';
import FilterField from '../components/FilterField';
import SearchField from '../components/SearchField';
import SearchList from '../components/SearchList';
import SearchItem from '../components/SearchItem';
import { Clickable } from '../components/HOC';
import { withRouter } from 'react-router'

const SearchContainer = ({history, search, repositories, filters, onSearch, onFilter, owners, onSelect}) => (
	<div>
		<h2>Search repository</h2>
		<FilterField items={owners} onChange={onFilter}/>
		<SearchField value={search} onChange={onSearch}/>
		<SearchList filters={filters || []} items={repositories || []} component={Clickable(SearchItem, history, onSelect)}/>
		<Link to='/'>Home</Link>
	</div>
);

const mapState2Props = (state) => (
	{
		search: state.search,
		repositories: state.repositories,
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
		onSelect: (history, props) => {
			history.push('/' + props.item.id);
			dispatch(selectRepository(props.item.id))
		},
	}
);
export default withRouter(connect(mapState2Props, mapDispatch2Props)(SearchContainer));
