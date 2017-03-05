'use strict';
const Sequelize = require('sequelize');
const db = require('APP/db');


const Review = db.define('reviews', {
  description: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.FLOAT
  },

  subject_id: {
    type: Sequelize.INTEGER
  }

});

module.exports = Review;
