import React from 'react';

const outerStyle = {
	display: 'inline-block',
	positon: 'relative',
	width: 40,
	height: 40,
};

const style = {
	width: 30,
	lineHeight: '40px',
	fontSize: 40,
	position: 'absolute',
	top: '50%',
	left: '50%',
	animationName: 'infinite-rotate',
	animationDuration: '2s',
	animationIterationCount: 'infinite',
	animationTimingFunction: 'linear',
};

export default () => (
	<div style={outerStyle}>
		<div style={Object.assign({}, outerStyle, style)}>⟳</div>
	</div>
);
