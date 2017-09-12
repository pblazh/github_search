import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';
import DateValue from './DateValue';
import Loading from './Loading';
// eslint-disable-next-line no-unused-vars
import style from '../stylesheets/App-repository.css';

const RepositoryInfo = ({ repository=null }) => {
	const rep = Object.assign({
		description: 'no description',
	}, repository);

	return repository
		? (
			<section className='App-repository'>
				<h2>{ rep.name }</h2>
				<aside>
					<section>Language: { rep.language }</section>
					<section className='App-RepositoryScore'>
						{ rep.score && <Score score={ rep.score }/> }
					</section>
					<section className='App-RepositoryDates'>
						<DateValue what={ `Created by ${rep.ownerName } on: `} date={ repository.createdAt }/>
						<DateValue what='Last updated on: ' date={ repository.updatedAt }/>
					</section>
				</aside>
				<section className='App-repositoryDescription'>{ rep.description }</section>
				<a className='App-button' href={ rep.url } target='blank'>{ rep.url }</a>
			</section>
		)
		: <Loading/>;
};

RepositoryInfo.defaultProps = {
	repository: [],
};

RepositoryInfo.propTypes = {
	repository: PropTypes.shape({
		createdAt: PropTypes.string,
		updatedAt: PropTypes.string,
		description: PropTypes.string,
		language: PropTypes.string,
		score: PropTypes.number,
		ownerName: PropTypes.string,
	}),
};

export default RepositoryInfo;
