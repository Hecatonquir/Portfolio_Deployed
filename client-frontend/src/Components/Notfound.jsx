import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Notfound.css';

export default function Notfound() {
	return (
		<main className='error'>
			<br />
			<h1>
				Oh No! Something went wrong! This page does not exist and never will. That or either i'm
				still working on this page. Cheers!
			</h1>
			<div>
				<h3>Go back to home?</h3>
				<Link to={'/home'}>
					<button>Yes!</button>
				</Link>
			</div>
		</main>
	);
}
