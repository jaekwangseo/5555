import axios from 'axios';
import R from 'ramda';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';
const GET_SELLER = 'GET_SELLER';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const GET_CURRENT_USER = 'GET_CURRENT_USER';

//the action types below might be a part of auth.jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const SET_ADMIN = 'SET_ADMIN';
const GET_USER_RATING = 'GET_USER_RATING';

//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  currentUser: {}, //logged user
  selectedSeller: {},
  users: [], //for admin
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
      newState.users = state.users.filter( user => user.id !== action.userId);
      break;

    case UPDATE_USER:
      //MISSING IMPLEMENTATION
      break;

    case GET_USERS:
      newState.users = action.users;
      break;

    case GET_SELLER:
      newState.selectedSeller = action.seller;
      break;

    case SET_ADMIN:

      newState.users = state.users.map(user => {
        if (user.id === action.userId) {
          user.admin = true;
          return user;
        }
      return user;
      });

      break;
    // case GET_USER_RATING:
    //   console.log('ACTION CREATOR RATING',action.rating);
    //   newState.selectedSeller = Object.assign({}, ...state.currentSeller, {userRating: action.rating});

    //   break;

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


export const deleteUser = (userId) => ({
    type: DELETE_USER,
    userId
});

export const deleteUserOnServer = (userId) => {
  return dispatch => {
    dispatch(deleteUser(userId));
    axios.delete(`/api/users/${userId}`)
    .catch(err => console.error('User deletion unsuccessful', err));
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

export const receiveAllUsers = () => {
  return dispatch => {
    axios.get('/api/users')
    .then(res => res.data)
    .then(data => dispatch(getUsers(data)));
 };
};

export const getSeller = (seller) => ({
  type: GET_SELLER,
  seller
});

export const receiveSeller = (sellerId) => {
  return dispatch => {
    axios.get(`/api/users/${sellerId}`)
    .then(res => res.data)
    .then(seller => {
      dispatch(getSeller(seller));
    });
  };
};


export const setAdmin = (userId) => ({
    type: SET_ADMIN,
    userId
});

export const setAdminOnUser = (userId) => {

  return dispatch => {
    dispatch(setAdmin(userId));
    axios.put(`/api/users/${userId}`)
    .catch(err => console.error('Could not promote to admin', err));

  };
};

//Trying to get actual user ratings not dummy data

// const getRating = (rating) => ({
//   type: GET_USER_RATING,
//   rating
// });

// export const gettingRating = (userId) => {
//   return dispatch => {
//     axios.get(`/api/reviews/user/1`)
//     .then(res => res.data)
//     .then(ratings => {
//       dispatch(getRating(ratings));
//     })

//     .catch(err => console.error(err));
//   };
// };
