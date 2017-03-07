import React from 'react';
import { Link } from 'react-router';

export default (props) => {




console.log('admin props', props.orderList);

  return (
  <div>

    <ul className="list-group">
    {
      props.auth && props.auth.admin && props.orderList && props.orderList.map( (order) => (

        <li key={order.id} className="list-group-user col-md-6 col-md-offset-3">
            <h3 className="list-group-order-"> {order.status} </h3>
            <h3 className="list-group-order-"> {order.order_items.price} </h3>
            <h3 className="list-group-order-"> {order.order_items.quantity} </h3>
            <form className="status" onSubmit={props.handleStatusChange}>
            <select name="status">
              <option value="cancelled">Cancelled</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
            </select>

            <input type="submit" />
            </form>

            {order && order.order_items.map(order_item => (
              <div>
                <h3 className="list-group-order-"> {order_item.item.title} </h3>
                <h3 className="list-group-order-"> {order_item.item.description} </h3>
                <h3 className="list-group-order-"> {order_item.item.price} </h3>
              </div>
            ))
            }

        </li>
      ))
  }
  </ul>

</div>

  );
};



