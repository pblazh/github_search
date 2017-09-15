import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import Footer from '../components/Footer';
import glass from '../images/glass.jpg';
import glass2x from '../images/glass_2x.jpg';
// eslint-disable-next-line no-unused-vars
import style from '../stylesheets/App-infoblock.css';


export default () => (
	<section className='App-main'>
		<header className='App-image'>
			<div className="App-logo">
				<img src={ logo } alt="logo" />
				<img src={ logo } alt="" />
			</div>
		</header>
		<main>
			<section className='App-infoblock'>
				<section>
					<h3>Requirements:</h3>
					<img className='App-infoblockImage'
						srcSet={ `${glass },
								${ glass2x } 2x`}
						src={ glass }
						alt="magnifying glass"/>

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
			</section>
		</main>
		<Footer/>
	</section>
);
