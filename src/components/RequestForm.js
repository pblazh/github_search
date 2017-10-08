import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uniqWith, debounce, partial, identity } from 'lodash/fp';
import FilterField from './FilterField';
import SearchField from './SearchField';
// eslint-disable-next-line no-unused-vars
import style from '../stylesheets/App-requestForm.css';

const LANGUAGES = [
	'JavaScript',
	'Python',
	'C',
	'Lisp',
	'Java',
];

const mergeLanguages = (...languages) => {
	let sortedLanguages = languages
		.map(language => Array.isArray(language) ? language : language.toJS())
		.reduce((prev, cur) => prev.concat(cur), [])
		.sort();
	sortedLanguages = uniqWith((a, b) => a.toLowerCase() === b.toLowerCase(), sortedLanguages);
	return sortedLanguages;
};

class RequestForm extends Component {
	constructor(props) {
		super(props);
		this.onLanguage = partial(this.onFieldChange, ['language']).bind(this);
		this.onQ = partial(this.onFieldChange, ['q']).bind(this);
		this.onChange = debounce(1000, this.onChange).bind(this);

		this.state = Object.assign(
			{
				language: null,
				q: '',
			},
			this.props.search,
		);
	}
	onChange() {
		this.props.onChange(this.state);
	}

	onFieldChange(field, value) {
		this.setState({
			[field]: value,
		}, () => this.onChange(this.state));
	}

	render() {
		return (
			<section className='App-requestform'>
				<FilterField
					className='App-requestformFilter'
					what='language'
					items={ mergeLanguages(LANGUAGES, this.props.languages) }
					selected={ this.state.language }
					onChange={ this.onLanguage } />

				<SearchField
					className='App-requestformFilter'
					value={ this.state.q || '' }
					onChange={ this.onQ } />

				<aside>{this.props.children}</aside>
			</section>
		);
	}
}

RequestForm.defaultProps = {
	children: null,
	languages: LANGUAGES,
	search: {
		q: '',
		language: null,
	},
	onChange: identity,
};

RequestForm.propTypes = {
	languages: PropTypes.arrayOf(PropTypes.string),
	children: PropTypes.node,
	onChange: PropTypes.func.isRequired,
	search: PropTypes.shape({
		q: PropTypes.string,
		language: PropTypes.string,
	}),
};

const mapState2Props = state => (
	{
		languages: state.get('languages').map(language => language.id),
	}
);

export default connect(mapState2Props)(RequestForm);
