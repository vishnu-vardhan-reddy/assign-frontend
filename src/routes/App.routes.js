import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Products from '../pages/Products/Products';

function AppRoutes() {
return (
    <div>
      <Switch>
        <Route exact path='/products' component={Products} />
      </Switch>
    </div>
  );
}

export default AppRoutes;