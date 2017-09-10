import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {
	searchRequest,
	filterBy,
	selectRepository,
} from '../actions';
import FilterField from '../components/FilterField';
import SearchList from '../components/SearchList';
import SearchItem from '../components/SearchItem';
import RequestForm from '../components/RequestForm';
import Loading from '../components/Loading';
import { Clickable } from '../components/HOC';
import { withRouter } from 'react-router'

const SearchContainer = ({history, repositories, filters, owners, onSearch, onFilter, onSelect}) => {
	console.log( repositories);
	return (
	<div>
		<h2>Search repository</h2>
		<RequestForm onChange={onSearch} />
		<hr/>
		{filters && <FilterField what='filter by owner' items={owners} onChange={onFilter}/>}
		{
			repositories
			? <SearchList filters={filters}
						  items={repositories}
						  component={Clickable(SearchItem, history, onSelect)}/>
			: <Loading/>
		}
		<Link to='/'>Home</Link>
	</div>
);
}

SearchContainer.propTypes = {
	history: PropTypes.object.isRequired,
	repositories: PropTypes.array,
	filters: PropTypes.array,
	owners: PropTypes.array,
	onSearch: PropTypes.func.isRequired,
	onFilter: PropTypes.func,
	onSelect: PropTypes.func,
};

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
		onSearch: (value) => dispatch(searchRequest(value)),
		onFilter: (value) => dispatch(filterBy(value
												? {ownerId: value.id}
												: {})),
		onSelect: (history, props) => {
			history.push('/' + props.item.name);
			dispatch(selectRepository(props.item.id))
		},
	}
);
export default withRouter(connect(mapState2Props, mapDispatch2Props)(SearchContainer));
