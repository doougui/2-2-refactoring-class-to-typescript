import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;
