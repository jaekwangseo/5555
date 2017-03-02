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
    type: Sequelize.FLOAT
  },
  title: {
    type: Sequelize.STRING,
    defaultValue: 'Untitled'
  }

}, {

});

module.exports = Item;
