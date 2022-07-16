import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './Redux/store.js';
import App from './App';
import './Styles/index.css';

/* Configurations for Deploying This allows my front to communicate with Herokus BackEnd */
import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_VERCEL_URL || 'http://localhost:3001';

/* ------------ End of Deploy config ---------------- */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
