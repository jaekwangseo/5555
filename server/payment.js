const db = require('APP/db');
const Payment = db.model('payment');
const Order = db.model('order');
const OrderItem = db.model('order_item');
const Item = db.model('items');

const router = require('express').Router();// eslint-disable-line new-cap
  router.post('/', (req, res, next) => {
    let orderId = -1;
    Payment.create(req.body)
    .then(newPayment => {
			return Order.update({status: 'completed', payment_id: newPayment.id}, {where: {id: req.body.orderId}});// completed and paymentId
    })
    .then(order => {
			orderId = order.id;
			res.json(orderId);
			//return OrderItem.findAll({where: {order_id: order.id}});
    })
    // .then(arrOfOrderItems => {
    // 	Promise.map(arrOfOrderItems, function(orderItem){
    // 		 Item.findOne({where: {id: orderItem.item_id}})
    // 		.then(item => {
    // 			return OrderItem;
    // 		})
    // 	})
			
    // })
    .catch(next);
	});

  module.exports = router;
