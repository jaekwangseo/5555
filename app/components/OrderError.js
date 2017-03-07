import React from 'react';
import {Link} from 'react-router';

export default function OrderError(){
	return (
		<div id="OrderError">
			<h1>ERROR!!! </h1>
			<Link to="/home">Click here to go to the home page!</Link>
		</div>
		);
}
