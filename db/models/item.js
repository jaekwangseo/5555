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

  title: {
    type: Sequelize.STRING,
    defaultValue: 'Untitled'
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  }

}, {
  scopes: {
    populated: () => ({
      include: [
        { model: db.model('users'), as: 'seller' },

      ]
    })
  }

});

module.exports = Item;
