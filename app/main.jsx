'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import MainContainer from './containers/MainContainer';
import ItemsContainer from './containers/ItemsContainer';
import UserContainer from './containers/UserContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import ItemContainer from './containers/ItemContainer';
import LoginComponent from './components/Login.jsx';
import ReviewsContainer from './containers/ReviewsContainer.jsx';

import { receiveAllUsers, receiveUser, receiveSeller } from './reducers/user.jsx';
import { receiveAllItems, receiveSellerItems, receiveItemFromServer } from './reducers/item.jsx';

const onHomeEnter = () => {
  store.dispatch(receiveAllItems());
  //store.dispatch(receiveAllUsers()); //get all users only if admin
};

const onSellerPageEnter = (nextRouterState) => {
  store.dispatch(receiveSeller(nextRouterState.params.userId));
};

const onSellerItemsPageEnter = (nextRouterState) => {
  store.dispatch(receiveSellerItems(nextRouterState.params.userId));
};

const onItemPageEnter = (nextRouterState) => {
  store.dispatch(receiveItemFromServer(nextRouterState.params.itemId));
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} >
        <IndexRedirect to="home" />
        <Route path="home" component={ItemsContainer} onEnter={onHomeEnter} />
        <Route path="item/:itemId" component={ItemContainer} onEnter={onItemPageEnter} />
        <Route path="user/:userId" component={UserContainer} onEnter={onSellerPageEnter} />
        <Route path="user/:userId/items" component={ItemsContainer} onEnter={onSellerItemsPageEnter} />
        <Route path="createUser" component={CreateUserContainer} />
        <Route path="login" component={LoginComponent} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
