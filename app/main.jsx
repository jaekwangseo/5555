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
import CartContainer from './containers/CartContainer';

import LoginComponent from './components/Login.jsx';
import ReviewsContainer from './containers/ReviewsContainer.jsx';
import AdminContainer from './containers/AdminContainer.jsx';
import UsersContainer from './containers/UsersContainer.jsx';
import CreateItemContainer from './containers/CreateItemContainer.jsx';
import EditItemContainer from './containers/EditItemContainer.jsx';



import {gettingItemReviews} from './reducers/reviews.jsx';

import { receiveAllUsers, receiveUser, receiveSeller } from './reducers/user.jsx';

import { receiveAllItems, receiveSellerItems, receiveItemFromServer, receiveItemToEditFromServer } from './reducers/item.jsx';


import { receiveCartFromServer } from './reducers/order';

const onAppEnter = () => {
  console.log('app enter');
};


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
  store.dispatch(gettingItemReviews(nextRouterState.params.itemId));
};

//for Admin only
const onUsersEnter = () => {
  store.dispatch(receiveAllUsers());
};

const onItemEditEnter = (nextRouterState) => {
  store.dispatch(receiveItemToEditFromServer(nextRouterState.params.itemId));
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} onEnter={onAppEnter} >
        <IndexRedirect to="home" />
        <Route path="home" component={ItemsContainer} onEnter={onHomeEnter} />
        <Route path="cart" component={CartContainer} />
        <Route path="item/:itemId" component={ItemContainer} onEnter={onItemPageEnter} />
        <Route path="user/:userId" component={UserContainer} onEnter={onSellerPageEnter} />
        <Route path="item/:itemId/edit" component={EditItemContainer} onEnter={onItemEditEnter} />
        <Route path="user/:userId/items" component={ItemsContainer} onEnter={onSellerItemsPageEnter} />
        <Route path="createUser" component={CreateUserContainer} />
        <Route path="login" component={LoginComponent} />
      </Route>
      <Route path="/admin" component={AdminContainer} onEnter={onHomeEnter} />
      <Route path="/admin/users" component={UsersContainer} onEnter={onUsersEnter} />
      <Route path="/createItem" component={CreateItemContainer} />
    </Router>
  </Provider>,
  document.getElementById('main')
);
