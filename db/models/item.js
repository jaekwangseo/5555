'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');
const User = require('./user');

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
  scopes: {
    populated: () => ({ // function form lets us use to-be-defined models
      include: [
        { model: db.model('users'), as: 'seller' }
      ]
    })
  }

});

module.exports = Item;
