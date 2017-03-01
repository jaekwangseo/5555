import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const ADD_CART_ITEM = 'ADD_CART_ITEM';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';


//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  cart: []
};


//-----------------------------------------------------------------------------
// THE REDUCER
export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case DELETE_CART_ITEM:
      newState.cart = [...state.cart];  //Makes duplicate cart array from initState
      const index = newState.cart.indexOf(action.itemToDelete); //Finds the index of the element we want to delete
      if (index > -1) {
        delete newState.cart[index];       //Deletes element but leaves an undefined val in its place
        newState.cart.filter(n => true); //ERIC DID THIS. IF IT DOESNT WORK...BLAME HIM
      }

      break;

    case ADD_CART_ITEM:
      newState.cart = [...state.cart, action.itemToAdd];
      break;

    default:
      return state;
  }
  return newState;
};


//-----------------------------------------------------------------------------
//   ACTION CREATORS AND THUNK MIDDLEWARE

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
