import React from 'react';
import PropTypes from 'prop-types';

const star = (score, nth) => (nth < score ? '★' : '☆');

const Score = ({ score }) => (
	<section> {
		[...Array(10).keys()].map(i => star(score / 10, i))
	} </section>
);

Score.propTypes = {
	score: PropTypes.number.isRequired,
};

export default Score;
