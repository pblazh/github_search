import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import RepositoryInfo from '../components/RepositoryInfo';
import {
	infoRequest,
} from '../actions';

class RepositoryContainer extends(Component){
	componentDidMount(){
		if(!this.props.repository){
			this.props.onEmpty(document.location.pathname);
		};
	}
	render(){
		return (
			<div>
				<h2>Search text</h2>
				<RepositoryInfo repository={this.props.repository} />
				<Link to='/'>Home</Link>
				<Link to='/search'>Search</Link>
			</div>
		);
	}
}

RepositoryContainer.propTypes = {
	repository: PropTypes.object,
}

const mapState2Props = (state) => (
	{
		repository: (state.repository && state.repositories.length)
					? state.repositories.filter(repository => repository.id === state.repository).pop()
					: null,
	}
);

const mapDispatch2Props = (dispatch) => (
	{
		onEmpty: (value) => dispatch(infoRequest(value)),
	}
);

export default connect(mapState2Props, mapDispatch2Props)(RepositoryContainer);
