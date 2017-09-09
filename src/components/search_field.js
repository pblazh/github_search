import React, {Component} from 'react';

class SearchField extends Component{
	render(){
		return (
			<input type='text'
				onChange={(evt) => this.props.onChange(evt.target.value)}
				value={this.props.value}
				placeholder='search here'/>
		);
	}
}

export default SearchField;
