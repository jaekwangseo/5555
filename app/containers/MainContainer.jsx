// This is the Container that holds all other containers and components (a.k.a. root container)

import React from 'react';
import WrapperContainer from './WrapperContainer';

export default class MainContainer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<WrapperContainer />
				{ this.props.children }
		  </div>
		 );
	}
}
