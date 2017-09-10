import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {partial} from 'lodash/fp';
import {debounce} from 'lodash-fp';
import FilterField from './FilterField';
import SearchField from './SearchField';

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

		this.state = {
			language: null,
			q: null,
		}
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
			<section>
				<FilterField what='language'
							 items={languages}
							 onChange={this.onLanguage}/>

				<SearchField value={this.state.q || ''}
							 onChange={this.onQ}/>
			</section>
		);
	}
}

RequestForm.propTypes = {
	onChange: PropTypes.func.isRequired,
};

