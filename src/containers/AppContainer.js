import React from 'react'
import '../stylesheets/main.css'

export default (props) => (
	<div className='appContainer'>
		<h1>Github search</h1>
		{props.children}
	</div>
)
