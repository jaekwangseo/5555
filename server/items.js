'use strict'; // eslint-disable-line semi

//If you ever need to check what the association methods are console.log(Model.Instance.prototype)

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

  router.post('/', (req, res, next) => {
    console.log('req.body------', req.body);
    Item.create({
      price: req.body.price,
      description: req.body.description,
      title: req.body.title,
      seller_id: req.body.seller_id
    })
    .then( (item) => {
      item.setCategories(req.body.categoryArr)
      .catch(err => console.error('Could not set category for item', err));
      res.json(item);
    })
    .catch(next);
    });

  router.put('/', (req, res, next) => {
     Item.update({
        price: req.body.price,
        description: req.body.description,
        title: req.body.title,
        seller_id: req.body.seller_id
      }, {
        where: {
          id: req.params.itemId
        },
        returning: true
      })
    .then((item) => {
      item[1][0].setCategories([])
      .catch(next);
      item[1][0].setCategories(req.body.categoryArr)
      .catch(err => console.error('Could not set category for item', err));
      res.json(item[1][0]);
    })
    .catch(next);
    });

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


  router.put('/:itemId/edit', (req, res, next) => {


    Item.update({
      price: req.body.price,
      description: req.body.description,
      title: req.body.title,
      seller_id: req.body.seller_id
    }, {
      where: {
        id: req.params.itemId
      },
      returning: true
    })
    .then( item => {
      item[1][0].setCategories([])
      .catch(next);
      item[1][0].setCategories(req.body.categoryArr)
      .catch(err => console.error('Could not set category for item', err));
      res.json(item[1][0]);
    })
    .catch(next);
    });


module.exports = router;
