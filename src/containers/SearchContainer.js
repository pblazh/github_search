import {partial, identity} from 'lodash/fp';
import React from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {which} from '../util';
import {
	searchRequest,
	filter,
	toggleLogic,
	selectRepository,
} from '../actions';
import Footer from '../components/Footer';
import FilterField from '../components/FilterField';
import SearchList from '../components/SearchList';
import SearchItem from '../components/SearchItem';
import RequestForm from '../components/RequestForm';
import LogicalContainer from '../containers/LogicalContainer';
import Loading from '../components/Loading';
import {Clickable} from '../components/HOC';

const SearchContainer = ({history, repositories, search, filters, owners, languages, logic, onSearch, onFilter, onSelect, onLogic}) => (
	<section className='App-main App-searchpage'>
		<header>
			<RequestForm onChange={onSearch} search={search}>
				{filters && <section className='App-filters'>
					<b > Filter by </b>
					<LogicalContainer logic={logic} onToggle={onLogic}>
						<FilterField
							what='owner'
							selected={which({id: filters.ownerId}, owners)}
							items={owners}
							onChange={partial(onFilter, ['ownerId'])} />
						<FilterField
							what='language'
							selected={which(filters.language ? {id: filters.language} : null, languages)}
							items={languages}
							onChange={partial(onFilter, ['language'])} />
					</LogicalContainer>
				</section>}
			</RequestForm>
		</header>
		<main>
			{
				repositories
					? <SearchList
						filters={filters}
						logic={logic}
						items={repositories}
						component={Clickable(SearchItem, history, onSelect)} />
					: <Loading />
			}
		</main>
		<Footer buttons={[
			{name: 'home', to: '/'},
		]} />
	</section>
);

SearchContainer.defaultProps = {
  repositories: [],
  filters: {},
  logic: 'and',
  search: {},
  owners: [],
  onFilter: identity,
  onSelect: identity,
  onLogic: identity,
};

SearchContainer.propTypes = {
	history: PropTypes.object.isRequired,
	repositories: PropTypes.array,
	filters: PropTypes.object,
	search: PropTypes.object,
	logic: PropTypes.string,
	languages: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	})),
	owners: PropTypes.array,
	onSearch: PropTypes.func.isRequired,
	onFilter: PropTypes.func,
	onSelect: PropTypes.func,
	onLogic: PropTypes.func,
};

const mapState2Props = state => (
	{
		search: state.searchRequest,
		repositories: state.repositories,
		owners: state.owners,
		languages: state.languages,
		filters: state.filters,
		logic: state.logic,
	}
);

const mapDispatch2Props = dispatch => (
	{
		onSearch: value => dispatch(searchRequest(value)),
		onLogic: () => dispatch(toggleLogic()),
		onFilter: (what, value) => dispatch(filter({[what]: value ? value.id : value})),
		onSelect: (history, props) => {
			history.push(`/${props.item.name}`);
			dispatch(selectRepository(props.item.id));
		},
	}
);

export default withRouter(connect(mapState2Props, mapDispatch2Props)(SearchContainer));
