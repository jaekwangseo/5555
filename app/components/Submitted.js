import React from 'react';
import {Link} from 'react-router';

export default function Submitted(){
	return (
		<div id="Submitted" className="order-error-box col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3 col-xs-12">
			<h1 className='first-form-input col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3'>Thanks for shopping at RAD!!! </h1>
			<Link to="/home" className="col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3">Click here to go to the home page!</Link>
		</div>
		);
}
