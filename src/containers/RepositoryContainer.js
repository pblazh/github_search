import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepositoryInfo from '../components/RepositoryInfo';
import Footer from '../components/Footer';
import {
	infoRequest,
} from '../actions';

class RepositoryContainer extends (Component){
	componentDidMount(){
		if(!this.props.repository){
			this.props.onEmpty(document.location.pathname);
		};
	}
	render(){
		return (
			<section className='App-main'>
				<main>
					<RepositoryInfo repository={ this.props.repository } />
				</main>
				<Footer buttons={[
					{ name: 'home', to: '/' },
					{ name: 'search', to: '/search' },
				]}/>
			</section>
		);
	}
}

RepositoryContainer.propTypes = {
	repository: PropTypes.object,
	onEmpty: PropTypes.func.isRequired,
}

const mapState2Props = state => (
	{
		repository: (state.repository && state.repositories.length)
			? state.repositories.filter(repository => repository.id === state.repository).pop()
			: null,
	}
);

const mapDispatch2Props = (dispatch) => (
	{
		onEmpty: value => dispatch(infoRequest(value)),
	}
);

export default connect(mapState2Props, mapDispatch2Props)(RepositoryContainer);
