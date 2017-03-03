'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const Item = db.model('items');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

const router = require('express').Router();// eslint-disable-line new-cap

  router.get('/', (req, res, next) => {
    console.log('Session', req.session);
    Item.findAll()
    .then(items => res.json(items))
    .catch(next);
  });

  router.post('/', (req, res, next) =>
    Item.create(req.body)
    .then(item => res.status(201).json(item))
    .catch(next));

  router.get('/:id', (req, res, next) => {

    Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(next);

  });

module.exports = router;
