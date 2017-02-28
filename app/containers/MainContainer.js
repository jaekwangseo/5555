import React from 'react';
import WrapperContainer from './WrapperContainer';

export default class MainContainer extends React.Component{
	constructor(props){
		super(props);
	}

//RENDER FUNCTION
	render(){
		return (
			<div>
				<WrapperContainer />
				{ this.props.children }
		  </div>
		 );
	}
}

