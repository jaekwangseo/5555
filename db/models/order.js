'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');


const Order = db.define('orders', {

  date: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.ENUM,
    values: ['cancelled', 'completed', 'processing']
  }


}, {

});

module.exports = Order;
