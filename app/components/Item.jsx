import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  return (
    <div className="list-group-item col-md-6 col-md-offset-3">
      <h2>{props.item.title}</h2>
      <p>Price: ${props.item.price}</p>
      <p>Rating: {props.item.rating}/5</p>
      <p>Description: {props.item.description}</p>
      <Link to={`/user/${props.item.seller_id}`} >By: CHANGE THIS TO THE USERNAME WITH EAGERLOADING</Link>
    </div>
  );
};
