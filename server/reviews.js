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

  router.get('/:id', (req, res, next) => {
    console.log('getting an review');
    Review.findById(req.params.id)
    .then(review => {
      console.log('review being returned', review);
      res.json(review);
    })
    .catch(next);

  });

module.exports = router;
