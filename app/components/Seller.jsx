import React from 'react';
import { Link } from 'react-router';
import Items from './Items';

export default (props) => {

  // Expect props to have user,

  return (
    <div>
      <h1>Name: {props.user.name}</h1>
      <p>Email: {props.user.email}</p>
      <p>Rating: {props.user.rating}</p>
      <Link to={Items} >Items</Link>
    </div>
  );
};
