import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  user: require('./user').default,
  //admin: require('./admin').default,
  order: require('./order').default,
  item: require('./item').default,
  reviews: require('./reviews').default

});

export default rootReducer;
