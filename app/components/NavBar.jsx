//this navbar was copy pasted from bootstrap websites.

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducers/auth.jsx';


// class NavBarContainer extends React.Component {
//
//   constructor(props){
//     super(props);
//   }
//
//   onLogoutClick (event) {
//     this.props.authNull({
//
//     })
//   }
//
// }
export default (props) =>
{
  console.log(props);
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
					<li>
						<Link to='/' >Home </Link>
					</li>
					<li>
            <Link to={ props.auth && `/user/${props.auth.id}`}>My Account</Link>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to='/cart' >Shopping Cart </Link>
					</li>
					<li>
						{props.auth ? <Link to='/home' onClick={ () => props.handleLogoutClick() }>Logout</Link> : <Link to='/login' >Login</Link>}
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
};
