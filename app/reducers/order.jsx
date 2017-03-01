import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const ADD_CART_ITEM = 'ADD_CART_ITEM';


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
      let newCart = [...state.cart];  //Makes duplicate cart array from initState
      const index = newCart.indexOf(action.itemToDelete); //Finds the index of the element we want to delete
      if (index){
        delete newCart[index];       //Deletes element but leaves an undefined val in its place
        newCart.filter(n => true); //ERIC DID THIS. IF IT DOESNT WORK...BLAME HIM
      }
      newState.cart = newCart;
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
