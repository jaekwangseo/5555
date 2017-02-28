// This is our main wrapper that every page within the website will be contained within

import React from 'react';

export default class WrapperContainer extends React.Component{
	render(){
		return (
			<div id="Wrapper">
				<div id="Header">
					<h1 style={{display: 'inline'}}>Welome {/* NAME GOES HERE!!!!!!!!!!!!!*/}!</h1>
					<button type="button" id="cart" style={{display: 'inline'}} >CART!!!</button>
				</div>
		  </div>
		 );
	}
}
