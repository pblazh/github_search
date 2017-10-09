import { partial, identity } from 'lodash/fp';
import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { which } from '../util';
import {
	searchRequest,
	filter,
	toggleLogic,
	selectRepository,
} from '../actions';
import Footer from '../components/Footer';
import Error from '../components/Error';
import FilterField from '../components/FilterField';
import SearchList from '../components/SearchList';
import SearchItem from '../components/SearchItem';
import { shape as SearchFieldShape } from '../components/SearchField';
import RequestForm from '../components/RequestForm';
import LogicalContainer from '../containers/LogicalContainer';
import Loading from '../components/Loading';
import { Clickable, toJS } from '../components/HOC';
import RepositoryInfo from '../components/RepositoryInfo';


// eslint-disable-next-line max-len
const SearchContainer = ({ error, history, repositories, search, filters, owners, languages, logic, onSearch, onFilter, onSelect, onLogic }) => (
	<section className='App-main App-searchpage'>
		<header>
			<RequestForm onChange={onSearch} search={search}>
				{filters && <section className='App-filters'>
					<b > Filter by </b>
					<LogicalContainer logic={logic} onToggle={onLogic}>
						<FilterField
							what='owner'
							selected={ which({ id: filters.ownerId }, owners) }
							items={ owners}
							onChange={partial(onFilter, ['ownerId']) } />
						<FilterField
							what='language'
							selected={which(filters.language ? { id: filters.language } : 0, languages)}
							items={languages}
							onChange={partial(onFilter, ['language'])} />
					</LogicalContainer>
				</section>}
			</RequestForm>
		</header>
		<main>
			{
				error
				? <Error message={error} />
				: (repositories
					? <SearchList
						filters={filters}
						logic={logic}
						items={repositories}
						component={Clickable(SearchItem, history, onSelect)} />
					: <Loading />
				)
			}
		</main>
		<Footer buttons={[
			{ icon: '\u2302', name: 'home', to: '/' },
		]} />
	</section>
);

SearchContainer.defaultProps = {
  error: null,
  repositories: [],
  languages: [],
  filters: {},
  logic: 'and',
  search: {},
  owners: [],
  onFilter: identity,
  onSelect: identity,
  onLogic: identity,
};

SearchContainer.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
	repositories: PropTypes.arrayOf(RepositoryInfo.propTypes.repository),
	// eslint-disable-next-line react/forbid-prop-types
	filters: PropTypes.object,
	search: SearchFieldShape,
	error: PropTypes.string,
	logic: PropTypes.string,
	languages: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	})),
	owners: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		name: PropTypes.string,
	})),
	onSearch: PropTypes.func.isRequired,
	onFilter: PropTypes.func,
	onSelect: PropTypes.func,
	onLogic: PropTypes.func,
};

const mapState2Props = state => (
	{
		search: state.get('searchRequest'),
		repositories: state.get('repositories'),
		owners: state.get('owners'),
		languages: state.get('languages'),
		filters: state.get('filters'),
		logic: state.get('logic'),
		error: state.get('error'),
	}
);

const mapDispatch2Props = dispatch => (
	{
		onSearch: value => dispatch(searchRequest(value)),
		onLogic: () => dispatch(toggleLogic()),
		onFilter: (what, value) => dispatch(filter({ [what]: value ? value.id : value })),
		onSelect: (history, props) => {
			history.push(`/${props.item.name}`);
			dispatch(selectRepository(props.item.id));
		},
	}
);

export default withRouter(connect(mapState2Props, mapDispatch2Props)(toJS(SearchContainer)));
