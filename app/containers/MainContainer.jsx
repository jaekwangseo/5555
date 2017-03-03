// This is the Container that holds all other containers and components (a.k.a. root container)

import React from 'react';
import NavBar from './NavBar';
import ItemsContainer from './ItemsContainer';


export default class MainContainer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<NavBar />
				{ this.props.children }
		  </div>
		 );
	}
}
