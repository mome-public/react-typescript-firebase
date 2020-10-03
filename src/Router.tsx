import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Top } from 'pages';

const Router: FC = () => (
  <Switch>
    <Route path="/" exact>
      <Top />
    </Route>
  </Switch>
);

export default Router;
