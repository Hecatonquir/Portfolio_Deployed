import React from 'react';
/* import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; */

// @ts-ignore
import logo from '../Styles/logo.svg';
import '../Styles/Home.css';
import Projects from './Projects';

export default function Home() {
	/* 	const dispatch = useDispatch();
	let countriesState = useSelector((state) => state.algo); */
	let BackEndSimulation = [
		{
			ID: 1,
			Image: 'https://i.gzn.jp/img/2021/04/30/ultimate-guide-black-holes/img-snap00848.png',
			Name: 'Country',
			Url: 'https://springer-countries-app.vercel.app',
			Description: 'This SPA was created with React app, blablablablablablablablablabla',
		},
		{
			ID: 2,
			Image: 'https://i.gzn.jp/img/2021/04/30/ultimate-guide-black-holes/img-snap00848.png',
			Name: 'Food',
			Url: 'Food-deploy.com',
			Description: 'This SPA was created with React app, blablablablablablablablablabla',
		},
		{
			ID: 3,
			Image: 'https://i.gzn.jp/img/2021/04/30/ultimate-guide-black-holes/img-snap00848.png',
			Name: 'Pokemon',
			Url: 'Pokemon-deploy.com',
			Description: 'This SPA was created with React app, blablablablablablablablablabla',
		},
		{
			ID: 4,
			Image: 'https://i.gzn.jp/img/2021/04/30/ultimate-guide-black-holes/img-snap00848.png',
			Name: 'Rick & Morty',
			Url: 'Rick & Morty-deploy.com',
			Description: 'This SPA was created with React app, blablablablablablablablablabla',
		},
	];

	return (
		<main>
			<h2> Welcome to my Portfolio!</h2>
			<h6>(super efectos visuales)</h6>
			<img src={logo} className='App-logo' alt='logo' />
			<h2>PROJECTS</h2>
			<Projects projects={BackEndSimulation} />
			<h2>ACA VA UN COMPONENTE ABOUT ME y todas mis skills (fotos Y nombres)</h2>
			<h2>ACA VA UN CONTACT ME COMPONENTE</h2>
		</main>
	);
}
