import React from 'react'
import '../stylesheets/main.css'

export default (props) => (
	<div className='appContainer'>
		<header className='App-header'>Github search</header>
		{props.children}
	</div>
)
