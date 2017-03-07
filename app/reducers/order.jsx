import axios from 'axios';
import _ from 'lodash';


//ACTION DEFINITIONS
//-----------------------------------------------------------------------------
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';

const RECEIVE_CART = 'RECEIVE_CART';


//ADMIN ONLY
const CHANGE_STATUS = 'CHANGE_STATUS';
const RECEIVE_ALL_ORDERS = 'RECEIVE_ALL_ORDERS';


//-----------------------------------------------------------------------------
//INITIAL STATE
const initialState = {
  cart: {},
  orderList: []

};


//-----------------------------------------------------------------------------
// THE REDUCER
export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CART:
      newState.cart = action.cart;
      break;

    case ADD_CART_ITEM:
      // const result = state.cart.order_items.filter(item => {
      //   return item.item_id === action.item.item_id;
      // });
      // if (result.length > 0) { //If item already exist, increment quantity
      //   newState.cart.order_items = [...state.cart.order_items];
      //   const itemToUpdate = _.find(newState.cart.order_items, item => item.item_id === action.item.item_id);
      //   console.log('itemtoupdate', itemToUpdate);
      //   itemToUpdate.quantity = itemToUpdate.quantity + 1;
      // } else {
        if ( !state.cart.order_items ) {
          newState.cart.order_items = [];
        }
        newState.cart.order_items = [...state.cart.order_items, action.item];
      // }
      break;

    case DELETE_CART_ITEM:
      newState.cart = Object.assign({}, state.cart);
      newState.cart.order_items = newState.cart.order_items.filter(item => (item.item_id !== action.itemId));
      break;

    case INCREMENT_QUANTITY:
      // newState.cart = Object.assign({}, state.cart);
      newState.cart.order_items = [...state.cart.order_items];
      const itemToUpdate = _.find(newState.cart.order_items, item => item.item_id === action.itemId);
      itemToUpdate.quantity = itemToUpdate.quantity + 1;
      break;

    case CHANGE_STATUS:

      newState.orderList = state.orderList.map(order => {
        if (order.id === action.orderId) {
          order.status = action.status;
          return order;
        }
      return order;
      });
      break;

    case RECEIVE_ALL_ORDERS:
      newState.orderList = action.orders;
      break;

    default:
      return state;
  }
  return newState;
};


//-----------------------------------------------------------------------------
//   ACTION CREATORS AND THUNK MIDDLEWARE

const deleteItemAction = (itemId) => ({
    type: DELETE_CART_ITEM,
    itemId
  });

export const deleteItemFormCart = (itemId) => {
  return dispatch => {
    axios.delete(`/api/orders/cart/${itemId}`)
    .then(results => {
      console.log('delete item from cart', results);
      dispatch(deleteItemAction(itemId));
    });
 };
};

const incrementQuantity = (itemId) => ({
  type: INCREMENT_QUANTITY,
  itemId
});

const addCartItemAction = (item) => ({
  type: ADD_CART_ITEM,
  item
});

export const addItemToCart = (itemId) => {
  return dispatch => {
    axios.post(`/api/orders/cart/${itemId}`)
    .then(res => {
      console.log('addItemToCart', res);
      if ( res.data.quantity === 1) {
        console.log('dispatch add cart item action');
        dispatch(addCartItemAction(res.data));
      } else {
        console.log('dispatch increment');
        dispatch(incrementQuantity(itemId));
      }
    })
    .catch(err => console.error(err));
 };
};

export const receiveCart = (cart) => (
  {
    type: RECEIVE_CART,
    cart
  }
);

export const receiveCartFromServer = () => {
  return (dispatch, getState) => {
    axios.get('/api/orders/cart')
    .then(res => res.data)
    .then(cart => {
      dispatch(receiveCart(cart));
    });
  };
};


const receiveAllOrders = (orders) => ({
  type: RECEIVE_ALL_ORDERS,
  orders
});

export const getAllOrders = () => {
  return (dispatch) => {
    axios.get('/api/orders')
    .then(res => res.data)
    .then(orders => {
      dispatch(receiveAllOrders(orders));
    });
  };
};

export const changeStatusOfOrder = (orderId, status) => ({
  type: CHANGE_STATUS,
  orderId,
  status
});

export const updateStatusOfOrder = (orderId, status) => {
  return (dispatch) => {
    dispatch(changeStatusOfOrder(orderId, status));
    axios.put(`/api/orders/${orderId}`, status)
    .catch(err => console.error('Could not change status of current order', err));

  };
};

