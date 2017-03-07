'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const Item = require('./item');
const Order = require('./order');
const OrderItem = require('./order-item');
const Category = require('./category');
const Review = require('./review');
const Payment = require('./payment');


OAuth.belongsTo(User);
User.hasOne(OAuth);


Item.belongsTo(User, {as: 'seller', foreignKey: 'seller_id'});
User.hasMany(Item, { foreignKey: 'seller_id'});

Review.belongsTo(Item);
Review.belongsTo(User, {as: 'reviewer'});

Order.belongsTo(User, {as: 'buyer', foreignKey: 'buyer_id'});
User.hasMany(Order, { foreignKey: 'buyer_id'});

Item.belongsToMany(Order, { through: OrderItem});
Order.belongsToMany(Item, { through: OrderItem});

OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);
OrderItem.belongsTo(Item);
Item.hasMany(OrderItem);

Item.belongsToMany(Category, { through: 'item_category' });
Category.belongsToMany(Item, { through: 'item_category'});

Order.hasOne(Payment);

module.exports = {User, Item, Order, Category, Review, OAuth, OrderItem};
