import React from 'react';
import { Link } from 'react-router';


export default (props) => {

  return (
    <div className="list-group-item col-md-6 col-md-offset-3">
      <h2>{props.item.title}</h2>
      <p>Price: ${props.item.price}</p>
      <p>Rating: {props.item.rating}/5</p>
      <p>Description: {props.item.description}</p>
      <Link to={`/user/${props.item.seller_id}`} >By: { props.item.seller && props.item.seller.name } </Link>
      <div className="container button-wrapper">
         <button className="btn-lg btn-success col-md-offset-3" style={{float: "right"}}onClick={(event) => {event.preventDefault(); props.addItemToCart(item.id);}}>Add <span className="glyphicon glyphicon-shopping-cart"></span></button>
      </div>
    </div>
  );
};
