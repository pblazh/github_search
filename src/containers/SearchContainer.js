import { partial } from 'lodash/fp';
import React from 'react';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { where } from '../util';
import {
	searchRequest,
	filterBy,
	selectRepository,
} from '../actions';
import Footer from '../components/Footer';
import FilterField from '../components/FilterField';
import SearchList from '../components/SearchList';
import SearchItem from '../components/SearchItem';
import RequestForm from '../components/RequestForm';
import Loading from '../components/Loading';
import { Clickable } from '../components/HOC';

const SearchContainer = ({ history, repositories, search, filters, owners, languages, onSearch, onFilter, onSelect }) => (
	<section className='App-main App-searchpage'>
		<header>
			<RequestForm onChange={ onSearch } search={ search }>
				{filters && <section className='App-filters'>
					<b> Filter by </b>
					<FilterField
						what='owner'
						selected={ where({id: filters.ownerId}, owners).pop() }
						items={ owners }
						onChange={ partial(onFilter, ['ownerId']) }/>
					<span> or </span>
					<FilterField
						what='language'
						selected={ where(filters.language ? {id: filters.language} : null, languages).pop() }
						items={ languages }
						onChange={ partial(onFilter, ['language']) }/>
				</section>}
			</RequestForm>
		</header>
		<main>
			{
				repositories
					? <SearchList filters={ filters }
						items={ repositories }
						component={ Clickable(SearchItem, history, onSelect) }/>
					: <Loading/>
			}
		</main>
		<Footer buttons={[
			{ name: 'home', to:'/' },
		]}/>
	</section>
);

SearchContainer.propTypes = {
	history: PropTypes.object.isRequired,
	repositories: PropTypes.array,
	filters: PropTypes.object,
	owners: PropTypes.array,
	onSearch: PropTypes.func.isRequired,
	onFilter: PropTypes.func,
	onSelect: PropTypes.func,
};

const mapState2Props = state => (
	{
		search: state.searchRequest,
		repositories: state.repositories,
		owners: state.owners,
		languages: state.languages,
		filters: state.filters,
	}
);

const mapDispatch2Props = dispatch => (
	{
		onSearch: value => dispatch(searchRequest(value)),
		onFilter: (what, value) =>
			dispatch(filterBy(value
			? { [what]: value.id }
			: {})),
		onSelect: (history, props) => {
			history.push(`/${ props.item.name }`);
			dispatch(selectRepository(props.item.id));
		},
	}
);
export default withRouter(connect(mapState2Props, mapDispatch2Props)(SearchContainer));
