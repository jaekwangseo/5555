'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

// const Item = require('./item');
// const Order = require('./order');


const OrderItem = db.define('order_item', {

  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }

}, {
  scopes: {
    item: () => ({
      include: [
        {
          model: db.model('items')
          // attributes: ['title', 'description', 'order_item'],
        }
      ]
    })
  }
});

// Item.belongsToMany(Order, { through: OrderItem });
// Order.belongsToMany(Item, { through: OrderItem });

module.exports = OrderItem;
