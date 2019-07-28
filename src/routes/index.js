import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/main';
import Trailers from '../pages/trailers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/protected/trailers" component={Trailers} />
  </Switch>
);

export default Routes;
