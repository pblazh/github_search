import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';
import DateValue from './DateValue';
import Loading from './Loading';

const RepositoryInfo = ({repository}) => {
	const rep = Object.assign({
		description: 'no description',
	}, repository);

	return repository
		? (
			<section>
				<h3>{ rep.name }</h3>
				<section>{ rep.language }</section>
				{rep.score && <Score score={ rep.score }/>}
				<aside>
					<DateValue what={'Created by ' + rep.ownerName + ' on: '} date={repository.createdAt}/>
					<DateValue what='Last updated on: ' date={repository.updatedAt}/>
					<section>{ rep.description }</section>
				</aside>
				<a href={ rep.url }>{ rep.url }</a>
			</section>
		)
		: <Loading/>;
};

RepositoryInfo.propTypes = {
	repository: PropTypes.object,
};

export default RepositoryInfo;
