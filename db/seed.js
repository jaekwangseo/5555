'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const data = require('./dummy_data');


const Users = () => db.Promise.map(data.user, user => db.model('users').create(user));

const Items = () => db.Promise.map(data.item, item => db.model('items').create(item));

const Orders = () => db.Promise.map(data.order, order => db.model('orders').create(order));

const orderItem = () => db.Promise.map(data.orderItem, itemOrder => db.model('order_item').create(itemOrder));

const Category = () => db.Promise.map(data.category, category => db.model('category').create(category));

const Reviews = () => db.Promise.map(data.reviews, review => db.model('reviews').create(review));

db.didSync
  .then(() => db.sync({force: true}))
  .then(Users)
  .then(Category)
  .then(Items)
  .then(Orders)
  .then(orderItem)
  .then(Reviews)
  .then(users => console.log(`ed ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
