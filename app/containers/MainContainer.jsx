// This is the Container that holds all other containers and components (a.k.a. root container)

import React from 'react';
import NavBarContainer from './NavBarContainer';
import ItemsContainer from './ItemsContainer';
import { connect } from 'react-redux';
import { logout } from '../reducers/auth.jsx';



export default class MainContainer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<NavBarContainer />
				{ this.props.children }
		  </div>
		 );
	}
}
