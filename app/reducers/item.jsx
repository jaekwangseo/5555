// Items ACTIONS, ACTION-CREATORS, REDUCER

import axios from 'axios';
import _ from 'lodash';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const POST_ITEM = 'POST_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
const RECEIVE_ITEM = 'RECEIVE_ITEM';

const SORT_BY_PRICE = "SORT_BY_PRICE";
const SORT_BY_PRICE = "SORT_BY_PRICE";

//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  itemList: [],
  selectedItem: {},

};

//-----------------------------------------------------------------------------
// THE REDUCER
export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case POST_ITEM:
      newState.itemList = [...state.cart, action.itemToPost];
      break;

    case DELETE_ITEM:
      break;

    case RECEIVE_ITEMS:
      newState.itemList = action.items;
      break;

    case RECEIVE_ITEM:
      newState.selectedItem = action.item;
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
const addItemToServer = (item) => {
  return dispatch => {
    axios.post('/api/items', item)
    .then(res => res.data)
    .then(() => dispatch(postItemAction(item)))
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

const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  itemToDelete: payload
});
const deleteServerItem = () => {
  return dispatch => {
    axios.delete();
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
    .then(item => dispatch(receiveItem(item)))
    .catch((err) => console.error(err));
  };
};



//FILTER CAN BE PRICE
const filterItems = (filter) => {

}
