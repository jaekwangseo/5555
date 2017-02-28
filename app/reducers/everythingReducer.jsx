import axios from 'axios';

const POST_ITEM = 'POST_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

//the action types below might be a part of auth.jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user;
    default:
      return state;
  }
};



//this is an action creator for post-item

const postItemAction = (payload) => ({
  type: POST_ITEM,
  itemToPost: payload
});

const deleteCartItemAction = (payload) => ({
  type: DELETE_CART_ITEM,
  itemToDelete: payload
});

//Do we have to do this?
// const loginAction = (payload) => ({
//   type: LOGIN,
//   itemToPost: payload
// });
//
// const postItemAction = (payload) => ({
//   type: POST_ITEM,
//   itemToPost: payload
// });
