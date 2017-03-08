const db = require('APP/db');
const Payment = db.model('payment');
const Order = db.model('orders');
const OrderItem = db.model('order_item');
const Promise = require('bluebird');

//The following route stores a new payment method, attaches it to the current order,
//marks the current order as "complete", finalizes the price for all orderItems in the order
//and then, finally, creates a new "processing"/cart order for the user

const router = require('express').Router();// eslint-disable-line new-cap
  router.post('/:orderId', (req, res, next) => {
    Payment.create(req.body)	//Saves new payment method
    .then((newPayment) => {	//Note the following is a nested promise
			return Order.findOne({where: {id: parseInt(req.params.orderId)}})//gets the order from the route
			.then((order) => {
				order.status = 'completed';				//Updates the order status and order payment
				order.payment_id = newPayment.id;
				return order.save();							//saves order
			});
    })
    .then(order => {
			order = order.dataValues;		//Queries the OrderItem db for all order Items associated wiht the order
			const userId = order.buyer_id;
			return Promise.all([userId, OrderItem.scope('item').findAll({where: {order_id: order.id} //Passes down both an array of
																									})]);	//orderItems and the buyerId
    })
    .then(arrOfPromises => {
			const userId = arrOfPromises[0];	//unwraps the array of promises
			let arrOfOrderItems = arrOfPromises[1];
			return Promise.all([userId, Promise.map(arrOfOrderItems, (orderItem) => {
				orderItem.price = orderItem.item.price;	//Updates the orderItem price to current item price and saves
				return orderItem.save();
			})]);
		})
		.then((arrOfPromises) => {
			const userId = arrOfPromises[0];		//Creates new cart order for the buyer if the buyer is a member
			if (userId > -1) {
				return Order.create({status: 'processing', buyer_id: userId});
			}
			else {
				next();
			}
		})
		.then(() => res.json('Order Complete'))
    .catch(next);
	});


  module.exports = router;
