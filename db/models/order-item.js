'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

// const Item = require('./item');
// const Order = require('./order');


const OrderItem = db.define('order_item', {

  price: {
    type: Sequelize.FLOAT
  },
  quantity: {
    type: Sequelize.INTEGER
  }

}, {

});

// Item.belongsToMany(Order, { through: OrderItem });
// Order.belongsToMany(Item, { through: OrderItem });

module.exports = OrderItem;
