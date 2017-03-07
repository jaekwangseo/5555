const db = require('APP/db');
const Payment = db.model('payment');
const Order = db.model('orders');
const OrderItem = db.model('order_item');
const Item = db.model('items');
const Promise = require('bluebird');

const router = require('express').Router();// eslint-disable-line new-cap
  router.post('/:orderId', (req, res, next) => {
    Payment.create(req.body)
    .then(newPayment => {
			return Order.update({status: 'completed', payment_id: newPayment.dataValues.id}, {where: {id: req.params.orderId}});// completed and paymentId
    })
    .then(order => {
			console.log('GOTTEM');
			console.log(order);
			const userId = order.buyer_id;
			return OrderItem.findAll({where: {order_id: order.id}});
    })
    // .then((orderArray) => res.json(orderArray))
    .then(arrOfOrderItems => {
    	return Promise.map(arrOfOrderItems, function(orderItem){
    		 return {items: Item.findOne({where: {id: orderItem.item_id}}), orderItemId: orderItem.id};
    	});
    })
    .then((arrOfWrapperObj) => {
    	return Promise.map(arrOfWrapperObj, (wrapperObj) => {
    		return OrderItem.update({price: wrapperObj.items.price}, {where: {id: wrapperObj.orderItem.id}});
    	});
    })
    .then(arrOfOrderItems => res.json(arrOfOrderItems))
    .catch(next);
	});

  module.exports = router;
