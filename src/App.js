import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import SearchContainer from './containers/SearchContainer';
import RepositoryContainer from './containers/RepositoryContainer';

//import routes from './routes';
import reducers from './reducers';
import searchSaga from './sagas';
const initialState = require('./data/initial-state');
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(searchSaga);

export default (props) => (
	<Provider store={store}>
		<Router>
			<AppContainer>
			<Switch>
				<Route exact path='/' component={HomeContainer} />
				<Route exact path='/search' component={SearchContainer} />
				<Route path='/:repository' component={RepositoryContainer} />
			</Switch>
			</AppContainer>
		</Router>
	</Provider>
);

