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

});

module.exports = Order;
