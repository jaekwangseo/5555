'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const Order = db.model('orders');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

module.exports = require('express').Router() // eslint-disable-line new-cap
  .get('/', forbidden('only admins can list orders'), (req, res, next) =>
    Order.findAll()
    .then(orders => res.json(orders))
    .catch(next))
  .post('/', (req, res, next) =>
    Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next))
  .get('/:id', mustBeLoggedIn, (req, res, next) =>
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(next));
