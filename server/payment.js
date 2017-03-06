const db = require('APP/db');
const Payment = db.model('payment');
const Order = db.model('order');

const router = require('express').Router();// eslint-disable-line new-cap
  router.post('/', (req, res, next) => {
    Payment.create(req.body)
    .then(newPayment => {
			return Order.update({status: 'completed', payment_id: newPayment.id}, {where: {id: req.body.orderId}});// completed and paymentId
    })
    .then(order => {
			res.json(order);
    })
    .catch(next);
	});

  module.exports = router;
