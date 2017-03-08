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

  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },

  title: {
    type: Sequelize.STRING,
    defaultValue: 'Untitled'
  },
  url: {
    type: Sequelize.STRING,
    defaultValue: 'www.sopantech.com/assets/img/webdevelopmentbanner.png'
  }

}, {
  scopes: {
    populated: () => ({
      include: [
        { model: db.model('users'), as: 'seller' }
      ]
    })
  }

});

module.exports = Item;
