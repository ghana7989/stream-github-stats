import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Widget = ReactDOM.createRoot(
	document.getElementById('github-stats-widget') as HTMLElement
);
Widget.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
