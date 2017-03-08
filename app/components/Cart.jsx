import React from 'react';
import { Link } from 'react-router';

export default function Cart(props) {
  return (
    <ul className="list-group">
      {
        props.cart && props.cart.order_items && props.cart.order_items.map( (cartItem) => (
          <li key={cartItem.item_id} className="list-group-item col-md-6 col-md-offset-3">
            <Link to={`/item/${cartItem.item_id}`} >
              <h3 className="list-group-item-">{cartItem.item.title}</h3>
            </Link>
            <div className="list-group-item-text">
              <p>description: {cartItem.item.description}</p>
            </div>
            <div className="list-group-item-text">
              <p>quantity: {cartItem.quantity}</p>
            </div>
            <div className="list-group-item-text">
              <button className="remove-from-cart" onClick={() => props.handleRemove(cartItem.item_id)}>Remove</button>
            </div>

          </li>
        ))
      }
      {
        <div>
          <p>Subtotal: ${ props.cart && props.cart.order_items && props.cart.order_items.reduce((agg, orderItem) => {
              return agg + orderItem.item.price * orderItem.quantity;
          }, 0)}</p>
        </div>
      }
    </ul>
  );
}
