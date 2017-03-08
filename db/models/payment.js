'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Payment = db.define('payment', {

  CCN: {
    type: Sequelize.STRING
  },
  FirstName: {
    type: Sequelize.TEXT
  },
  LastName: {
    type: Sequelize.TEXT
  },
  Email: {
    type: Sequelize.TEXT
  },
  SecurityCode: {
    type: Sequelize.INTEGER
  },
  ExpirationMonth: {
    type: Sequelize.INTEGER
  },
  ExpirationYear: {
    type: Sequelize.INTEGER
  },
  Address: {
    type: Sequelize.STRING
  },
  City: {
    type: Sequelize.TEXT
  },
  State: {
    type: Sequelize.TEXT
  },
  Country: {
    type: Sequelize.TEXT
  },
  Phone: {
    type: Sequelize.TEXT
  }

});

module.exports = Payment;
