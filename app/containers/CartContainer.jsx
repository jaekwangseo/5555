import Cart from '../components/Cart';
import { connect } from 'react-redux';
import React from 'react';
import Payment from '../components/Payment';

import { deleteItemFormCart, addItemToCartState } from '../reducers/order';

class CartContainer extends React.Component {
	constructor(props){
		super(props);
    this.handleRemove = this.handleRemove.bind(this);
	}

  handleRemove(itemId) {
    this.props.deleteItemFromCart(itemId);
  }

	render(){
		return (
			<div>
        <Cart {...this.props} handleRemove={this.handleRemove} />
        <Payment cartId={this.props.cart.id} />
			</div>
		);
	}
}


const mapStateToProps = (state) => {
  return {
    cart: state.order.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart (item) {
      dispatch(addItemToCartState(item));
    },
    deleteItemFromCart(itemId) {
      dispatch(deleteItemFormCart(itemId));
    }
  };
};

//for the person who needs to do mapDispatchToProps, look at the juke-react-redux NewPlaylistContainer.js -Eric

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
