const db = require('APP/db');
const Review = db.model('reviews');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

const router = require('express').Router();// eslint-disable-line new-cap

  router.get('/', (req, res, next) => {
    Review.findAll()
    .then(reviews => res.json(reviews))
    .catch(next);
  });

  router.post('/', (req, res, next) =>
    Review.create(req.body)
    .then(review => res.status(201).json(review))
    .catch(next));

  router.get('/:itemId', (req, res, next) => {
    Review.findAll({
      where: {
        item_id: req.params.itemId
      }
    })
    .then(review => {
      res.json(review);
    })
    .catch(next);

  });

module.exports = router;
