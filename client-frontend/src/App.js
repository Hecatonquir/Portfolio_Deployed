import React from 'react';
/* import { Route, Switch } from 'react-router-dom'; */
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Projects from './container/Projects/Projects';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import { Navbar } from './Components';
import './Styles/App.scss';

export default function App() {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<Projects />
			<About />
			<Skills />
			{/* <Testimonial /> */}
			<Footer />
		</div>
	);
}
