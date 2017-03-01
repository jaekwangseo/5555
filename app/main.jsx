'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import axios from 'axios';
import Jokes from './components/Jokes';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import MainContainer from './containers/MainContainer';
import ItemsContainer from './containers/ItemsContainer';
import UserContainer from './containers/UserContainer';

import { getUsers } from './reducers/user.jsx';

const onAppEnter = () => {

  const pUsers = axios.get('/api/users'); //Might not want to load all users on app onEnter
  const pItems = axios.get('/api/items');

  return Promise
    .all([pUsers])
    .then(responses => responses.map(res => res.data))
    .then(([users]) => {
      store.dispatch(getUsers(users));
      store.dispatch(/*items*/);

    });
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} onEnter={onAppEnter}>
        <IndexRedirect to="home" />
        <Route path="home" component={ItemsContainer} />
        <Route path="jokes" component={Jokes} />
        <Route path="user/:id" component={UserContainer} />  {/*This is for selling profile page*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
