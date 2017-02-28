'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');


const Item = db.define('items', {

  price: {
    type: Sequelize.FLOAT
  },
  description: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.ENUM,
    values: [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]
  },


}, {

});

module.exports = Item;
