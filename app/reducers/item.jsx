import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const POST_ITEM = 'POST_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const RECEIVE_ITEMS = 'RECEIVE_ITEMS';


//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  itemList: []

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
    //  .then(res => )
     // use the dispatch method the thunkMiddleware gave us
    .then(res => res.data)
    .then(() => dispatch(postItemAction(albums)));
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
