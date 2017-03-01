// This is going to contain all of the items that are posted for sale on our homepage (or wherever we wanna see them)

// This is going to contain all of the items that are posted for sale on our homepage (or wherever we wanna see them)

import Items from '../components/Items';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    itemList: state.itemList
  };
};

//for the person who needs to do mapDispatchToProps, look at the juke-react-redux NewPlaylistContainer.js -Eric

const ItemsContainer = connect(mapStateToProps)(Items);
export default ItemsContainer;




//keeping this here just incase my copy pasted code above breaks something
/*import React from 'react';
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
}*/
