import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.querySelectorAll('#github-stats-widget').forEach((el) => {
	const Widget = ReactDOM.createRoot(el);
	Widget.render(
		<React.StrictMode>
			<App div={el as HTMLDivElement} />
		</React.StrictMode>
	);
});
