//THIS WRAPPER CONTAINER RENDERS A NAVBAR AND POTENTIALLY COULD CONTAIN OTHER CONSTANT STATIONARY MENUS

import React from 'react';

//ALL 
export default class WrapperContainer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="Wrapper">
				<div id="Header">
					{/*WELCOMES EITHER THE USER OR GUEST*/}
					<h1 style={{display: 'inline'}}>Welcome {/* NAME GOES HERE!!!!!!!!!!!!!*/}!</h1>

				{/* CART BUTTON*/}
					<button type="button" id="cart" style={{display: 'inline'}} >CART!!!</button>
				</div>
			</div>
		);
	}
}

