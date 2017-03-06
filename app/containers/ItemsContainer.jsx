import Items from '../components/Items';
import { connect } from 'react-redux';
import React from 'react';
import {addItemToCart} from '../reducers/order.jsx';

class ItemsContainer extends React.Component {
	constructor(props){
		super(props);
		this.handleAddToCart = this.handleAddToCart.bind(this);
	}

	handleAddToCart(item) {
		this.props.addItemToCart(item);
	}

	render() {
		return (
			<div>
        <Items {...this.props} handleAddToCart={this.handleAddToCart} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart (itemId) {
      dispatch(addItemToCart(itemId));
    }
  };
};

//for the person who needs to do mapDispatchToProps, look at the juke-react-redux NewPlaylistContainer.js -Eric

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
