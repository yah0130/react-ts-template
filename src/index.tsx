import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createHashHistory as createHistory } from 'history';
import routeList from './router';
import './style/app.sass';

// Create a router history
const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path={'/'} component={routeList.get('/app')} />
  </Router>,
  document.getElementById('app')
);
