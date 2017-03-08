// Items ACTIONS, ACTION-CREATORS, REDUCER

import axios from 'axios';
import _ from 'lodash';

//Needed for implementing filter feature
import R from 'ramda';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const POST_ITEM = 'POST_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
const RECEIVE_ITEM = 'RECEIVE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const SORT_BY_PRICE = 'SORT_BY_PRICE';
const EDIT_ITEM = 'EDIT_ITEM';
const RECEIVE_EDIT_ITEM = 'RECEIVE_EDIT_ITEM';
const INACTIVE_STATUS = 'INACTIVE_STATUS';
//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  itemList: [],
  selectedItem: {},
  currentEditItem: {}

};

//-----------------------------------------------------------------------------
// THE REDUCER
export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case POST_ITEM:
      newState.itemList = [...state.itemList, action.itemToPost];
      break;

    case DELETE_ITEM:
      newState.itemList = state.itemList.filter(item => item.id !== action.id);
      break;

    case UPDATE_ITEM:
      newState.itemsList = state.itemsList.map(item => {
        if (item.id === action.item.id) {
          item = action.item;
          return item;
        }
      return item;
      });

      break;

    case RECEIVE_ITEMS:
      newState.itemList = action.items;
      break;

    case RECEIVE_ITEM:
      newState.selectedItem = action.item;
      break;

    case RECEIVE_EDIT_ITEM:
      newState.currentEditItem = action.item;
      break;

    case EDIT_ITEM:
      newState.itemsList = state.itemList.map(item => {
        if (item.id === action.item.id) {
          item = action.item;
          return item;
        }
        return item;
      });
      newState.currentEditItem = action.item;
      break;

    case SORT_BY_PRICE:
      newState.itemList = action.items;
      break;

    case INACTIVE_STATUS:
      newState.itemList = state.itemList.filter(item  => {
        return item.id !== action.itemId;
      });
      newState.users = state.users.map(user => {
        if (user.id === action.userId) {
          user.admin = true;
          return user;
        }
      return user;
      });

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
export const addItemToServer = (item) => {

  return dispatch => {
    axios.post('/api/items', item)
    .then(res => res.data)
    .then((newItem) => dispatch(postItemAction(newItem)))
    .catch((err) => console.error(err));
 };
};


const updateItemAction = (item) => ({
  type: UPDATE_ITEM,
  item
});

//create thunk action create
export const updateItemToServer = (item) => {

  return dispatch => {
    axios.put('/api/items', item)
    .then(res => res.data)
    .then((newItem) => dispatch(updateItemAction(newItem)))
    .catch((err) => console.error(err));
 };
};

export const getItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveAllItems = () => {
  return dispatch => {
    axios.get('/api/items')
    .then(results => dispatch(getItems(results.data)));
 };
};

export const receiveSellerItems = (sellerId) => {
  return dispatch => {
    axios.get(`/api/users/${sellerId}/items`)
    .then(res => res.data)
    .then(items => dispatch(getItems(items)))
    .catch((err) => console.error(err));
 };
};

const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id
});

export const deleteServerItem = (itemId) => {
  return dispatch => {
    dispatch(deleteItem(itemId));
    axios.delete(`/api/items/${itemId}`)
    .catch( err => console.error(' Remove user unsuccessful', err));
  };
};

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item
});

export const receiveItemFromServer = (itemId) => {
  return dispatch => {
    axios.get(`/api/items/${itemId}`)
    .then(res => res.data)
    .then(item => {
      dispatch(receiveItem(item));

    })
    .catch((err) => console.error(err));
  };
};

//Pass in item array
export const sortByPrice =  R.sortBy(R.prop('price'));

export const groupingByCategory = (category) => {
  return dispatch => {
      axios.get(`/api/category/${category}`)
      .then(results => results.data)
      .then(items => {
        return dispatch(getItems(items));
      })
      .catch((err) => console.error(err));
    };
};


export const receiveEditedItem = (item) => ({
  type: RECEIVE_EDIT_ITEM,
  item
});

export const receiveItemToEditFromServer = (itemId) => {
  return dispatch => {
    axios.get(`/api/items/${itemId}`)
    .then(res => res.data)
    .then(item => dispatch(receiveEditedItem(item)))
    .catch((err) => console.error(err));
  };
};

const updateEditItemAction = (item) => ({
  type: EDIT_ITEM,
  item
});

//create thunk action create
export const updateEditItemToServer = (item) => {

  return dispatch => {
    axios.put(`/api/items/${item.id}/edit`, item)
    .then(res => res.data)
    .then((newItem) => dispatch(updateEditItemAction(newItem)))
    .catch((err) => console.error(err));
 };
};


const setInactive = (itemId) => ({
  type: INACTIVE_STATUS,
  itemId
});

export const setStatusToInactive = (itemId) => {
  return dispatch => {
  axios.put(`api/items/${itemId}/inactive`)
  .then( () => dispatch(setInactive(itemId)))
  .catch(err => console.error(err));
  };
};

