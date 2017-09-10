import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {partial} from 'lodash/fp';
import {debounce} from 'lodash-fp';
import FilterField from './FilterField';
import SearchField from './SearchField';
// eslint-disable-next-line no-unused-vars
import style from '../stylesheets/App-requestForm.css';

const languages = [
	'javaScript',
	'python',
	'C',
	'lisp',
	'java',
];

export default class RequestForm extends Component{
	constructor(props){
		super(props);
		this.onLanguage = partial(this.onFieldChange, ['language']).bind(this);
		this.onQ = partial(this.onFieldChange, ['q']).bind(this);
		this.onChange = debounce(1000, this.onChange).bind(this);

		this.state = Object.assign(
			{
				language: null,
				q: '',
			},
			this.props.search
		);
	}
	onChange(){
		this.props.onChange(this.state);
	}

	onFieldChange(field, value){
		this.setState({
			[field]: value,
		}, () => this.onChange(this.state));
	}

	render (){
		return(
			<section className='App-requestform'>
				<FilterField className='App-requestformFilter'
							 what='language'
							 items={languages}
							 selected={this.state.language}
							 onChange={this.onLanguage}/>

				<SearchField className='App-requestformFilter'
							 value={this.state.q || ''}
							 onChange={this.onQ}/>

				<aside>{this.props.children}</aside>
			</section>
		);
	}
}

RequestForm.propTypes = {
	onChange: PropTypes.func.isRequired,
};

