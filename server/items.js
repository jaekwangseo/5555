'use strict'; // eslint-disable-line semi

const db = require('APP/db');
const Item = db.model('items');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

const router = require('express').Router();// eslint-disable-line new-cap

  router.get('/', (req, res, next) => {

    console.log('Session', req.session);
    Item.scope('populated').findAll()
    .then(items => res.json(items))
    .catch(next);
  });

  router.post('/', (req, res, next) =>
    Item.create(req.body)
    .then(item => res.status(201).json(item))
    .catch(next));

  router.get('/:id', (req, res, next) => {

    Item.scope('populated').findById(req.params.id)
    .then(item => {
      res.json(item);
    })
    .catch(next);

  });


  router.delete('/:itemId', (req, res, next) => {
    console.log('am i being hit');
    Item.destroy({
      where: {
        id: req.params.itemId
      }
    })
    .catch(next);

  });

module.exports = router;
