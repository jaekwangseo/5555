import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------

const POST_ITEM = 'POST_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

//the action types below might be a part of auth.jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


//-----------------------------------------------------------------------------
//INITIAL STATE

const initialState = {
  itemsList: [],
  currentUser: {},
  cart: []
};


//-----------------------------------------------------------------------------
// THE MAIN REDUCER THINGY!!!!!

const rootReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    
    case POST_ITEM:
      newState.itemList = [...state.cart, action.itemToPost];
      break;

    case DELETE_CART_ITEM:
      let newCart = [...state.cart];  //Makes duplicate cart array from initState
      const index = newCart.indexOf(action.itemToDelete); //Finds the index of the element we want to delete
      if (index){
        delete newCart[index];       //Deletes element but leaves an undefined val in its place
        newCart.filter(n => true); //ERIC DID THIS. IF IT DOESNT WORK...BLAME HIM
      }
      newState.cart = newCart;
      break;

    case DELETE_ITEM:
      break;

     case ADD_CART_ITEM:
      let newCart = state.cart;
      newCart.push(action.itemToAdd);
      newState.cart = newCart;
      break;

    default:
      return state;
  }
  return newState;
};

//-----------------------------------------------------------------------------
//   ACTION CREATORS AND THUNK MIDDLEWARE

//this is an action creator for post-item
const postItemAction = (payload) => ({
  type: POST_ITEM,
  itemToPost: payload
});

//create thunk action create
const addItemToServer = () => {
 return dispatch => {
   axios.post('/api/items')
    //  .then(res => )
     // use the dispatch method the thunkMiddleware gave us
     .then(albums => dispatch(postItemAction(albums)));
 };
};

const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  itemToDelete: payload
});
const deleteServerItem = () => {
  return dispatch => {
    axios.delete();
  };
};


//CREATES A DELETECARTITEM AND DISPATCHES
const deleteCartItemAction = (payload) => ({
    type: DELETE_CART_ITEM,
    itemToDelete: payload
  });
//NOTE: NO CORRESPONDING THUNK BECAUSE THE CART IS CURRENTLY NON PERSISTENT


const addCartItemAction = (payload) => ({
    type: ADD_CART_ITEM,
    itemToAdd: payload
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
