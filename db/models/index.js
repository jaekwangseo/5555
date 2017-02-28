'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const Item = require('./item');
const Order = require('./order');
const OrderItem = require('./order-item');

OAuth.belongsTo(User);
User.hasOne(OAuth);

Item.belongsTo(User, {as: 'seller'});

Order.belongsTo(User, {as: 'buyer'});
Item.belongsToMany(Order, { through: OrderItem});
Order.belongsToMany(Item, { through: OrderItem});

module.exports = {User};
