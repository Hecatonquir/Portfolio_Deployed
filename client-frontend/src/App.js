import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import LandingPage from './Components/Landing';
import Notfound from './Components/Notfound';

export default function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/home' component={Home} />
				<Route component={Notfound} />
			</Switch>
		</div>
	);
}
