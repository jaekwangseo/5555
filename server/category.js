const db = require('APP/db');
const Category = db.model('category');



const router = require('express').Router();// eslint-disable-line new-cap

  router.get('/', (req, res, next) => {


    Category.findAll()
    .then(categories => res.json(categories))
    .catch(next);
  });

  module.exports = router;

