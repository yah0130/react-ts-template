import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeList from '../../router/index';

export default class baseComponent extends React.Component {
  render() {
    return (
      <Switch>
        {Array.from(routeList.keys()).map((route) => {
          return <Route path={route} exact component={routeList.get(route)} key={route} />;
        })}
        <Route path={'(/)'} component={routeList.get('/home')} />
        <Route path={'*'} component={routeList.get('/not-found')} />
      </Switch>
    );
  }
}
