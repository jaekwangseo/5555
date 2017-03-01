import React from 'react';
//import Orders from './Orders';

export default (props) => {

  // Expect props to have user,

  return (
    <div>
      <h1>Name: {props.user.name}</h1>
      <p>Email: {props.user.email}</p>
      <p>Rating: {props.user.rating}</p>

    </div>
  );
};
