import axios from 'axios';

const POST_ITEM = 'POST_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

//the action types below might be a part of auth.jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  itemsList: [],
  currentUser: {},
  cart: []
};

const rootReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case POST_ITEM:
      newState.itemList = [...itemList, action.itemToPost];
      //newState.itemList.push(action.itemToPost);
      break;
      //
      // newState.itemsList = action.itemToPost;
      // break;

    case DELETE_CART_ITEM:
      // newState.cart
    default:
      return state;
  }
  return newState;
};



//this is an action creator for post-item

const postItemAction = (payload) => ({
  type: POST_ITEM,
  itemToPost: payload
});

const deleteCartItemAction = (payload) => (
  store.dispatch({
  type: DELETE_CART_ITEM,
  itemToDelete: payload
})
);

//create thunk action create
const addItemToServer = () => {
 return dispatch => {
   axios.post('/api/items')
    //  .then(res => )
     // use the dispatch method the thunkMiddleware gave us
     .then(albums => dispatch(postItemAction(albums)));
 };
};


// const thunk

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
