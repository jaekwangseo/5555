'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');


const Order = db.define('orders', {

  date: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'processing'
  }

}, {

  scopes: {
    cartItems: () => ({
      // attributes: ['items', 'status'],
      include: [
        {
          model: db.model('order_item').scope('item')
          // attributes: ['title', 'description', 'order_item'],
        }
      ]
    })
  }
});

module.exports = Order;
