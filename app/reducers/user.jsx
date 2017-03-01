import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
//the action types below might be a part of auth.jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  currentUser: {},
};


//-----------------------------------------------------------------------------
// THE REDUCER
export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case ADD_USER:
      //newState.itemList = [...state.cart, action.itemToPost];
      break;

    default:
      return state;
  }
  return newState;
};


//-----------------------------------------------------------------------------
//   ACTION CREATORS AND THUNK MIDDLEWARE
