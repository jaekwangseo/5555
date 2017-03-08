import React from 'react';
import { Link } from 'react-router';

export default (props) => {

const convertDate = (date) => {

  if (!date) return '';
  const months = {
     1: 'Jan',
     2: 'Feb',
     3: 'Mar',
     4: 'Apr',
     5: 'May',
     6: 'Jun',
     7: 'Jul',
     8: 'Aug',
     9: 'Sept',
     10: 'Oct',
     11: 'Nov',
     12: 'Dec'
  };

  const dateOnly  = date.split('T');
  const splitted = dateOnly[0].split('-');
  return months[Number(splitted[1])] + ' ' + splitted[2] + ', ' + splitted[0];
};
console.log('orders', props);

  return (
    <div>

      <div className="form-group col-md-offset-3 col-md-6">
        <label htmlFor="category">Filter by Status</label> <br />

        <select name = "filter" onChange={ (event) => props.filteringByStatus(event.target.value)} >
            <option key={1} value="cancelled">Cancelled</option>
            <option key={2} value="completed">Completed</option>
        </select>

      </div>

      <ul className="list-group">
      {
        props.auth && props.orderList && props.orderList.map( (order) => (

          <li key={order.id} className="list-group-user col-md-6 col-md-offset-3">
              <h3 className="list-group-order-"> {convertDate(order.date)} </h3>
              <h6 className="list-group-order-"> {order.status} </h6>
              <h3 className="list-group-order-"> {order.order_items.quantity} </h3>

              {order && order.order_items.map(order_item => (
                <div key={order_item.item.id}>
                  <Link><h3 className="list-group-order-"> {order_item.item.title} </h3></Link>
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

