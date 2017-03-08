// 'use strict'; // eslint-disable-line semi

// const db = require('APP/db');
// const Order = require('./order');
// const User = require('./user');
// const OrderItem = require('./order_item');
// const Item = require('./item');
// const Payment = require('./payment');

// const {expect} = require('chai');

// describe('Order', () => {

//   before('Await database sync', () => db.didSync);
  
//   beforeEach('Makes new instances', (done) => {
//     let User1 = User.build({
//       name: 'Jacquin Mininger',
//       email: 'jam@gmail.com',
//       rating: 5,
//       admin: false,
//       active: true,
//       description: 'the greatest js coder ever'
//     });
//     let User2 = User.build({
//       name: 'Joey Zheng',
//       email: 'someEmail@gmail.com',
//       rating: 3,
//       admin: false,
//       active: true,
//       description: 'fullstack developer'
//     });
//     let Order1 = Order.build({});
//     let Item1 = Item.build({
//       price: 500.32,
//       description: 'C++ help',
//       name: 'C++'
//     });
//     let OrderItem1 = OrderItem.build({
//       price: 1000.64,
//       quantity: 2
//     });

//     User1.save()
//     .then((user) => {
//       User1.id = user.id;
//       Order1.buyer_id = user.id;
//       return Order1.save();
//     })
//     .then((order) => {
//       Order1.id = order.id;
//       OrderItem1.order_id = order.id;
//       return Item1.save();
//     })
//     .then((item) => {
//       Item1.id = item.id;
//       OrderItem1.item_id = item.id;
//       return OrderItem1.save();
//     })
//     .then(() => {
//       done();
//     });
//   });

//   afterEach('Clear the tables', () => db.truncate({ cascade: true }));

//   describe('Schema has the expected definition', () => {
//     it('has a status property', () => {
//       expect(Order.attributes.status).to.be.an('object');
//     });

//   });

//   describe('The scope works!!!', () => {
//     it('contains both orderItem and item in scope', (done) => {
//       Order.scope('cartItems').findAll({
//         where:{
//           id: Order1.id
//         }
//         // ,
//         // includes:})
//     //}
//     });
//   });

//   // describe('User only has 1 "processing" order at a time', () => {
//   //   it('resolves true if the password matches', () =>
//   //     User.create({ password: 'ok' })
//   //       .then(user => user.authenticate('ok'))
//   //       .then(result => expect(result).to.be.true));

//   //   it("resolves false if the password doesn't match", () =>
//   //     User.create({ password: 'ok' })
//   //       .then(user => user.authenticate('not ok'))
//   //       .then(result => expect(result).to.be.false));
//   // });
// })
