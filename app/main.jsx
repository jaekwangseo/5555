'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Jokes from './components/Jokes';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import MainContainer from './containers/MainContainer';
import ItemsContainer from './containers/ItemsContainer';
import UserContainer from './containers/UserContainer';

import { getAllItems, receiveAllItems } from './reducers/item.jsx';

const onHomeEnter = () => {
  store.dispatch(receiveAllItems());
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} onEnter={onHomeEnter}>
        <IndexRedirect to="home" />
        <Route path="home" component={ItemsContainer} />
        <Route path="jokes" component={Jokes} />
        <Route path="user/:id" component={UserContainer} />  {/*This is for selling profile page*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
