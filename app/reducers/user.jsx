import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GET_USER = 'GET_USER';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const GET_CURRENT_USER = 'GET_CURRENT_USER';

//the action types below might be a part of auth.jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  currentUser: {},
  users: [],
};


//-----------------------------------------------------------------------------
// THE REDUCER
export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case ADD_USER:
      newState.users = [...state.users, action.user];
      break;

    case DELETE_USER:
      //MISSING IMPLEMENTATION
      break;

    case UPDATE_USER:
      //MISSING IMPLEMENTATION
      break;

    // case GET_USER:
    //   //MISSING IMPLEMENTATION
    //   break;

    default:
      return state;
  }
  return newState;
};


//-----------------------------------------------------------------------------
//   ACTION CREATORS AND THUNK MIDDLEWARE

const addUser = (user) => ({
    type: ADD_USER,
    user
});

export const addUserOnServer = (user) => {
  return dispatch => {
    axios.post('/api/users', user)
    .then(res => res.data)
    .then((data) => {console.log('data from axios post', data); dispatch(addUser(user));})
    .catch((err) => console.error(err));
  };
};

const deleteUser = (user) => ({
    type: DELETE_USER,
    user
});

const deleteUserOnServer = (user) => {
  return dispatch => {
    axios.delete('/api/users', user)
    .then(res => res.data)
    .then(() => dispatch(deleteUser(user)));
  };
};

const updateUser = (user) => ({
    type: UPDATE_USER,
    user
});

const updateUserOnServer = (user) => {
  return dispatch => {
    axios.put('/api/users', user)
    .then(res => res.data)
    .then(() => dispatch(updateUser(user)));
  };
};

// const getUser = (userId) => ({
//     type: GET_USER,
//     userId
// });
