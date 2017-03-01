import axios from 'axios';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const POST_ITEM = 'POST_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  itemsList: []
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


const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  itemToDelete: payload
});
const deleteServerItem = () => {
  return dispatch => {
    axios.delete();
  };
};
