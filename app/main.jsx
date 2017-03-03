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
import CreateUserContainer from './containers/CreateUserContainer';

import { receiveAllUsers, receiveUser, receiveSeller } from './reducers/user.jsx';
import { receiveAllItems, receiveSellerItems } from './reducers/item.jsx';

const onAppEnter = () => {
  store.dispatch(receiveAllItems());
  //store.dispatch(receiveAllUsers()); //get all users only if admin
};

// const onUserPageEnter = (nextRouterState) => {
//   const userId = nextRouterState.params.id;
//   axios.get(`/api/users/${userId}`)
//     .then(res => res.data)
//     .then(data => {

//     });

//   store.dispatch(receiveUser(userId));
// };

// export const receiveUser = (userId) => {
//   return dispatch => {

//   };
// };

const onSellerPageEnter = (nextRouterState) => {
  store.dispatch(receiveSeller(nextRouterState.params.id));
};

const onSellerItemsPageEnter = (nextRouterState) => {
  store.dispatch(receiveSellerItems(nextRouterState.params.id));
};


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} onEnter={onAppEnter}>
        <IndexRedirect to="home" />
        <Route path="home" component={ItemsContainer} />
        <Route path="jokes" component={Jokes} />
        <Route path="user/:id" component={UserContainer} onEnter={onSellerPageEnter} />
        <Route path="user/:id/items" component={ItemsContainer} onEnter={onSellerItemsPageEnter} />
        <Route path="createUser" component={CreateUserContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
