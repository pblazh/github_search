import React from 'react';

const outerStyle = {
	positon: 'relative',
	width: 40,
	height: 40,
}

const style = {
	left: 0,
	top: 0,
	positon: 'absolute',
	width: 30,
	lineHeight: '40px',
	fontSize: 40,
	animationName: 'infinite-rotate',
	animationDuration: '2s',
	animationIterationCount: 'infinite',
	animationTimingFunction: 'linear',
}
export default () => (
	<div style={outerStyle}>
		<div style={Object.assign({}, outerStyle, style)}>⟳</div>
	</div>
);
