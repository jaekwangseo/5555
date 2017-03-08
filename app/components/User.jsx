import React from 'react';
import Items from './Items';
import Orders from './Orders';
import { Link } from 'react-router';

export default (props) => {

  console.log('rating', props.user.userRating);

  // Expect props to have user,
  return (

    <div className="list-group-item col-md-6 col-md-offset-3">

      <h1>Name: {props.user.name}</h1>
      <p>Email: {props.user.email}</p>
      <p>Rating: {props.user.rating}/5</p>

      <Link to={`/user/${props.user.id}/items`} >Items</Link><br/>
      { props.currentUser && props.user.id === props.currentUser.id || props.currentUser && props.currentUser.admin ? <Link to={`/orders/${props.user.id}`} >Orders</Link> : null }

      <Link to={`/user/${props.user.id}/items`} >Items</Link><br />

      <a href={props.user.url}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/2000px-Linkedin_icon.svg.png" style={{width: '50px', height: '50px'}}></img>
      </a>
      { props.currentUser && props.user.id === props.currentUser.id || props.currentUser && props.currentUser.admin ? <Link to={`/orders/${props.user.id}`} >Orders</Link> : null }
    </div>
  );
};
