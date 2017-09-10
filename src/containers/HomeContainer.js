import React from 'react';
import bg from '../images/bg.jpg';
import logo from '../images/logo.svg';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'

const headerStyle = {
	textAlign: 'center',
    backgroundPosition: 'center 20%',
    backgroundSize: 'cover',
	backgroundImage: 'url(' + bg + ')',
};

const logoStyle = {
	left: '50%',
};
export default () => (
	<section className='App-main'>
		<header style={headerStyle}>
			<div className="App-logo" style={logoStyle}>
				<img src={logo} alt="logo" />
				<img src={logo}  alt="logo" />
			</div>
		</header>
		<main>
			<section className='App-infoblock'>
				<h3>Requirements:</h3>
				<ul>
					<li>The application should be SPA and use react + redux stack</li>
					<li>The application should contain 2 pages:
						<ul>
							<li>Welcome page (some welcome info + image)</li>
							<li>Search page with input search and 2 filters/categories: Repositories, Users</li>
						</ul>
					</li>
					<li>The application should be responsive and should properly display on mobile devices and desktops</li>
					<li>The application should use github api without authentication</li>
				</ul>
			</section>
			<Link className='App-button-big' to='/search'>search</Link>
		</main>
		<Footer/>
	</section>
);
