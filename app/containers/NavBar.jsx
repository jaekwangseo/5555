//this navbar was copy pasted from bootstrap websites.

import React from 'react';
import Login from '../components/Login.jsx';
import { Link } from 'react-router';

//ALL
export default class NavBar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">rent-a-dev</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
			        <li><a href="#">My Account</a></li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li>
								<Link to="/cart">Shopping Cart</Link>
							</li>
							<li>
								<a href="/login">Login</a>
							</li>
			      </ul>
			    </div>
			  </div>
			</nav>
		);
	}
}


//https://www.npmjs.com/package/react-modal-bootstrap
