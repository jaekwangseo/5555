'use strict'; // eslint-disable-line s
//export
const request = require('supertest-as-promised');  //Allows us to do async calls with request(app)
const {expect} = require('chai');

require('APP/db');
require('APP/db/models/user');
//WHAT ARE THOSE??? ^^

const app = require('./start');


//NOT TOO SURE OF THE FOLLOWING:
import db from '../db/index';
import Order from '../db/models/Order';


describe('/api/orders', function(){
	//db.makeConnectionHere(){
		//REMEMBER TO IMPORT THE ORDER AND DB
		const order1 = new Order({ date: new Date(), status: 'completed' });
		//const order2 = new Order({ date: new Date(), status: 'cart' });
		const order3 = new Order({ date: new Date()});

    beforeEach('Synchronize and clear database', () => db.sync({force: true}));
    after('Synchronize and clear database', () => db.sync({force: true}));

	xdescribe('GET', function(){
		it('returns all of the users', function(){		//NEED TO FIGURE OUT HOW TO TEST WITH OAUTH

		});

	});
	describe('GET/:id', function(){
		it('gets the correct user', function(){
			request(app)
			.get('/orders/:1')
			.then((order) => {
				expect(order).to.be.an('object');
				expect(order.status).to.equal(order1.status);
			})
			.then(() => {
				return request(app).get('/orders/:3');
			})
			.then((order) => {
				expect(order).to.be.an('object');
				expect(order.status).to.equal(order3.status);
			});
			//FIGURE OUT HOW TO SEED THE DATABASE FIRST USING FRAMEWORK
		});
	});
	describe('POST', function(){
		it('Properly posts an order to the db', function(){
			request.app()
			.post('/')
			.send({status: 'someStatus'})
			.expect(201)
			.then(res => {
				 const createdOrder = res.body;
         return Order.findById(createdOrder.id);
			})
			.then(order => {
				expect(order.status).to.be.equal('someStatus');
			});
		});
	});
});
