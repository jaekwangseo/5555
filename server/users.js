'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const User = db.model('users');
const Order = db.model('orders');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

const router = require('express').Router(); // eslint-disable-line new-cap

  router.param('userId', (req, res, next, id) => {
    User.findById(id)
    .then(user => {
      if (!user) {
        const err = Error('User not found');
        err.status = 404;
        throw err;
      }
      req.user = user;
      next();
      return null;
    })
    .catch(next);
  });

  router.get('/', forbidden('only admins can list users'), (req, res, next) =>
    User.findAll()
    .then(users => res.json(users))
    .catch(next));


  router.post('/', (req, res, next) =>
    User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next));

  router.get('/:userId', mustBeLoggedIn, (req, res, next) => res.json(req.user)
  );

  router.get('/:userId/orders', (req, res, next) => {

    Order.findAll({
      where: {
        buyer_id: req.user.id
      }
    })
    .then(orders => {
      res.json(orders);
    })
    .catch(next);

  });

module.exports = router;
