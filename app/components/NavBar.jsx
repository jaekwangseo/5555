//this navbar was copy pasted from bootstrap websites.

import React from 'react';
import { Link } from 'react-router';

export default (props) =>
{
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
				<Link className="navbar-brand" to="/">Rent a Dev</Link>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav">
					<li>
						<Link to="/" >Home </Link>
					</li>
					<li>
						{props.auth && props.auth.admin ? <Link to='/admin'>Admin</Link> : null}
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to="/cart" >Shopping Cart </Link>
					</li>
          <li>
            { props.auth ? <Link to={`/user/${props.auth.id}`}>My Account</Link> : <Link to="/createUser">Sign Up</Link>}
          </li>
					<li>
						{props.auth ? <Link to="/home" onClick={ () => props.handleLogoutClick() }>Logout</Link> : <Link to="/login" >Login</Link>}
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
};
