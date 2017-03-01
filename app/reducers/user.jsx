import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const GET_CURRENT_USER = 'GET_CURRENT_USER';

//the action types below might be a part of auth.jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  currentUser: {}, //logged user
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

    case GET_USERS:
      //MISSING IMPLEMENTATION
      break;

    default:
      return state;
  }
  return newState;
};


//-----------------------------------------------------------------------------
//   ACTION CREATORS AND THUNK MIDDLEWARE

export const addUser = (user) => ({
    type: ADD_USER,
    user
});

export const addUserOnServer = (user) => {
  return dispatch => {
    axios.post('/api/users', user)
    .then(res => res.data)
    .then(() => dispatch(addUser(user)));
  };
};

export const deleteUser = (user) => ({
    type: DELETE_USER,
    user
});

export const deleteUserOnServer = (user) => {
  return dispatch => {
    axios.delete('/api/users', user)
    .then(res => res.data)
    .then(() => dispatch(deleteUser(user)));
  };
};

export const updateUser = (user) => ({
    type: UPDATE_USER,
    user
});

export const updateUserOnServer = (user) => {
  return dispatch => {
    axios.put('/api/users', user)
    .then(res => res.data)
    .then(() => dispatch(updateUser(user)));
  };
};

export const getUsers = (users) => ({
    type: GET_USERS,
    users
});

export const getUser = (userId) => ({
  type: GET_USER,
  userId
});

export const receiveAllUsers = () => {
  return dispatch => {
    axios.get('/api/users')
    .then(res => res.data)
    .then(data => dispatch(getUsers(data)));
 };
};
