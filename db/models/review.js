'use strict';
const Sequelize = require('sequelize');
const db = require('APP/db');


//Get subject id by using a hook that looks at the item_id and queries the item data base to return the seller_id and then set that as the subject_id


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
