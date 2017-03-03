import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  return (
    <div>
      <h2>Title: {props.item.title}</h2>
      <p>Price: {props.item.price}</p>
      <p>Rating: {props.item.rating}</p>
      <p>Description: {props.item.description}</p>
      <Link to={`/user/${props.item.seller_id}`} >seller</Link>
    </div>
  );
};
