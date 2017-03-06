'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const Order = db.model('orders');
const OrderItem = db.model('order_item');
const Item = db.model('items');
const _ = require('lodash');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

const router = require('express').Router();// eslint-disable-line new-cap

router.get('/', (req, res, next) => { //admin only

  Order.findAll()
  .then(orders => res.json(orders))
  .catch(next);

});

router.post('/cart/:itemId', (req, res, next) => {

  if (!req.user) { // if guest
    //store cart on session.
    if (!req.session.cart) {
      req.session.cart = [];
    }
    const foundItem = _.find(req.session.cart, item => {
      return item.item_id === Number(req.params.itemId);
    });
    let newOrderItem = null;
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
      res.json(foundItem);
    } else {
      Item.findOne({where: { id: req.params.itemId }})
      .then(item => {
        newOrderItem = {
          item_id: item.id,
          quantity: 1,
          item: item
        };
        req.session.cart.push(newOrderItem);
        res.json(newOrderItem);
      })
      .catch(next);
    }


  } else {
    //There should only be one order with 'processing' status per user.
    Order.findAll({ where: { status: 'processing', buyer_id: req.user.id }})
    .then(orders => {


      if (orders.length !== 1) {
        const err = Error('There should not be more than one in process order per user');
        err.status = 400;
        throw err;
      }

      console.log('only one processing order for the user');

      const cart = orders[0];
      return OrderItem.scope('item').findOrCreate({ defaults: {quantity: 1}, where: { order_id: cart.id, item_id: req.params.itemId}});

    })
    .then(result => {
      const instance = result[0];
      const created = result[1];
      if (!created) {
        return instance.update({quantity: instance.quantity + 1});
      }
      return instance.reload(OrderItem.options.scopes.item());

    })
    .then(instance => {
      return res.json(instance);
    })
    .catch(next);
  }

});

router.get('/cart', mustBeLoggedIn, (req, res, next) => {
  Order.scope('cartItems').findOne({ where: { status: 'processing', buyer_id: req.user.id }})
  .then(order => {
    console.log('cart order', order);
    res.json(order);
  })
  .catch(next);
});

// router.get('/:id', (req, res, next) => {

//   //Item.scope('populated').findById(req.params.id)
//   Order.findById(req.params.id)
//   .then(order => {
//     res.json(order);
//   })
//   .catch(next);

// });

// Deletes an order item from cart
router.delete('/cart/:itemId', (req, res, next) => {

  if ( req.user) {
    Order.findAll({ where: { status: 'processing', buyer_id: req.user.id }})
    .then(orders => {

      if (orders.length !== 1) {
        const err = Error('There should not be more than one in process order per user');
        err.status = 400;
        throw err;
      }

      console.log('only one processing order for the user');

      const cart = orders[0];
      return OrderItem.findOne({ where: { item_id: req.params.itemId, order_id: cart.id }});

    })
    .then(orderItem => {
      return orderItem.destroy();
    })
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
  } else {
    req.session.cart = req.session.cart.filter( cartItem => cartItem.item_id !== Number(req.params.itemId));
    res.status(204).end();
  }


});

module.exports = router;
