// This is going to contain all of the items that are posted for sale on our homepage (or wherever we wanna see them)

import React from 'react';
import Items from '../components/Items';

export default class ItemsContainer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
        <Items />
			</div>
		);
	}
}
