import React from 'react';
import {Link} from 'react-router';

export default function OrderError(){
	return (
		<div id="OrderError" className="order-error-box col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3 col-xs-12">
			<h1 className='first-form-input col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3 col-xs-12'>ERROR!!! </h1>
			<Link className="col-md-offset-3 col-md-6 col-sm-6 col-sm-offset-3 col-xs-12" to="/home">Click here to go to the home page!</Link>
		</div>
		);
}
