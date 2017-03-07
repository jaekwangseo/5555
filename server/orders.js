'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const Order = db.model('orders');
const OrderItem = db.model('order_item');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

const router = require('express').Router();// eslint-disable-line new-cap

router.get('/', (req, res, next) => { //admin only

  Order.scope('cartItems').findAll()
  .then(orders => {
    console.log('orders');
    res.json(orders);
  })
  .catch(next);
});

router.post('/cart/:itemId', mustBeLoggedIn, (req, res, next) => {
  //There should only be one order with 'processing' status per user.
  Order.findAll({ where: { status: 'processing', buyer_id: req.user.id }})
  .then(orders => {


    if (orders.length > 1) {
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
router.delete('/cart/:itemId', mustBeLoggedIn, (req, res, next) => {

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


});


//Update to change status of order
router.put('/:orderId', (req, res, next) => {
  console.log(req.body);
  Order.update({
    status: req.body.status
      }, {
    where: {
      id: req.params.orderId
    }
  })
  .then(() => res.end('It worked'))
  .catch(next);

});

module.exports = router;
