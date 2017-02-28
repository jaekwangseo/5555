'use strict'; // eslint-disable-line semi

const db = require('APP/db');


const data = require('./dummy_data');


const seedUsers = () => db.Promise.map(data.users, user => db.model('users').create(user));

const seedItems = () => db.Promise.map(data.items, item => db.model('items').create(item));

const seedOrders = () => db.Promise.map(data.orders, order => db.model('orders').create(order));

const seedorder_item = () => db.Promise.map(data.order_item, order_item => db.model('order_item').create(order_item));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(seedItems)
  .then(seedOrders)
  .then(seedorder_item)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
