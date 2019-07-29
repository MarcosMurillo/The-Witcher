import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Login from '../pages/main';
import Trailers from '../pages/trailers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/trailers" component={Trailers} />
  </Switch>
);

export default Routes;
