import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import SearchContainer from './containers/SearchContainer';

export default (
  <Route path="/" component={AppContainer}>
		<Route exact path='/' component={HomeContainer} />
		<Route path='/search' component={SearchContainer} />
		//<Redirect from="*" to="/" />
  </Route>
);
