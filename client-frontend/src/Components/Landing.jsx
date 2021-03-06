import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Landing.css';

export default function LandingPage() {
	return (
		<main className='landing'>
			<br />
			<div className='Landing'>
				<h1 className='landing'> Hi! My name is Maximilian Springer! </h1>
				<h2>but everybody calls me Max...</h2>
				<h6>(musiquita de giovani girogio)</h6>
				<h6>Super efectos visuales épicos por todos lados</h6>

				<h3>I am (virtually) an Electrical Engineer⚡👷‍♂️, turned Web Developer👨‍💻!</h3>
				<h4>
					This is the landing page for my Portfolio. If you want to check out all the projects i
					have been working on, you can click on the button below!
				</h4>
				<h2>⬇️</h2>
				<Link to={'/home'}>
					<button>Enter</button>
				</Link>
				<h6>
					(agrandar, hover epico al boton y efectos copados al hacer click, estaría bueno el efecto
					de un agujero negro desde el boton hacia el resto de la pag)
				</h6>
				<h6>This is a beta version, an improoved version of this portfolio will come soon...</h6>
			</div>
		</main>
	);
}
