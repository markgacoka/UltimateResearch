import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Popup = () => {
	return <div>Popup</div>;
};

const Options = () => {
	return <div>Options</div>;
};

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/popup" component={Popup} />
				<Route path="/options" component={Options} />
			</Switch>
		</Router>
	);
};

export default App;
