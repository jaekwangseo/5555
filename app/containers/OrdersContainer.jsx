import { connect } from 'react-redux';
import React from 'react';
import Orders from '../components/Orders.jsx';
import { filteringByStatus} from '../reducers/order.jsx';


class OrdersContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
            console.log('orders container', this.props);
    return (
    <div>
      {

        this.props.auth &&
        (
          <div>
          <Orders orderList={this.props.userOrders} auth={this.props.auth} /*updateStatusOfOrder= {this.props.updateStatusOfOrder}*/ filteringByStatus={this.props.filteringByStatus} />
          </div>
        )

      }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    userOrders: state.order.userOrders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    filteringByStatus(status) {
      dispatch(filteringByStatus(status));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
