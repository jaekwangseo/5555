'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const Item = db.model('items');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

module.exports = require('express').Router() // eslint-disable-line new-cap
  .get('/', forbidden('only admins can list orders'), (req, res, next) =>
    Item.findAll()
    .then(items => res.json(items))
    .catch(next))
  .post('/', (req, res, next) =>
    Item.create(req.body)
    .then(item => res.status(201).json(item))
    .catch(next))
  .get('/:id', mustBeLoggedIn, (req, res, next) =>
    Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(next));
