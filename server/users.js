'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const User = db.model('users');
const Order = db.model('orders');
const Item = db.model('items');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

const router = require('express').Router(); // eslint-disable-line new-cap

router.param('userId', (req, res, next, id) => {
  next();
  // console.log('in users params');
  // User.scope('userLookup').findById(id)
  // .then(user => {
  //   console.log('got user');
  //   if (!user) {
  //     const err = Error('User not found');
  //     err.status = 404;
  //     throw err;
  //   }
  //   req.requestedUser = user;
  //   next();
  //   return null;
  // })
  // .catch(next);
});

router.get('/', forbidden('only admins can list users'), (req, res, next) =>
  User.findAll()
  .then(users => res.json(users))
  .catch(next));


router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => {
    Order.create({ status: 'processing' }) // cart(order)
    .then(order => {
      user.addOrder(order);
      res.status(201).json(user);
    });
  })
  .catch(next);
});

router.get('/:userId', /*mustBeLoggedIn,*/ (req, res, next) => {

  console.log('get user info', req.user && req.user.id, req.params.userId);
  let promise;
  if (req.user && req.user.id === Number(req.params.userId)) {
    promise = User.scope('getItems', 'getOrders').findById(req.params.userId);
  } else {
    promise = User.scope('sellerLookup', 'getItems').findById(req.params.userId);
  }

  promise.then(user => {
    if (!user) {
      const err = Error('User not found');
      err.status = 404;
      throw err;
    }
    res.json(user);

  })
  .catch(next);

});

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

router.get('/:userId/items', (req, res, next) => {
  Item.findAll({
    where: {
      seller_id: req.params.userId,
    }
  })
  .then(items => {
    res.json(items);
  })
  .catch(next);
});

module.exports = router;
