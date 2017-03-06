import Cart from '../components/Cart';
import { connect } from 'react-redux';
import React from 'react';
import Payment from '../components/Payment';

import { deleteItemFormCart } from '../reducers/order';

class CartContainer extends React.Component {
	constructor(props){
		super(props);
    this.handleRemove = this.handleRemove.bind(this);
	}

  handleRemove(itemId) {
    console.log('handleRemove called', itemId);
    this.props.deleteItemFromCart(itemId);
  }

	render(){
    console.log('cart container render');
		return (
			<div>
        <Cart {...this.props} handleRemove={this.handleRemove} />
        <Payment getPaymentInfo={props.getPaymentInfo} />
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
    // ,
    // getPaymentInfo: function(synthE){
    //   const CCN = synthE.target.CCN;
    //   const fname = synthE.target.fname;
    //   const lname = synthE.target.lname;
    //   dispatch();               //MUST DISPATCH CREDIT CARD INFO TO STORE

    // }
  };
};

//for the person who needs to do mapDispatchToProps, look at the juke-react-redux NewPlaylistContainer.js -Eric

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
