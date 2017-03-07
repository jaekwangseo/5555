import { connect } from 'react-redux';
import React from 'react';
import AdminOrders from '../components/AdminOrders.jsx';
import { browserHistory } from 'react-router';

import {updateStatusOfOrder} from '../reducers/order.jsx';


//import {createReview, gettingItemReviews} from '../reducers/admin.jsx';


const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList,
    auth: state.auth,
    orderList: state.order.orderList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStatusOfOrder(orderId, status) {
      dispatch(updateStatusOfOrder(orderId, status));
    }
  };
};


class AdminOrderContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);

  }


  handleStatusChange(evt) {
    console.log('evt', evt);

    this.props.updateStatusOfOrder(evt);
  }


  render() {
    return (
    <div>
      {this.props.auth ?
        <div>
        <AdminOrders orderList={this.props.orderList} auth={this.props.auth} handleStatusChange= {this.handleStatusChange} />
        </div>
      :
      <div>
        <h1> ADMINS ONLY </h1>
      </div>
      }
    </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderContainer);
