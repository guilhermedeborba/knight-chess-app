import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Routes from '../config/routes'

const Router = () => (
  <BrowserRouter>
    <Switch>
      {Routes.map(({ id, path, exact = false, component: Component }) => (
        <Route path={path} exact={exact} component={Component} key={`browse-router-route-${id}`} />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Router
