


import React from 'react';
import { Link } from 'react-router';

export default function Cart(props) {

return (
  <div>
    <Link to={`/admin/users`} >
      <button type="submit" className="btn btn-primary col-md-2 col-md-offset-5"> View Users</button>
    </Link>
    <Link to={`/admin/items`} >
      <button type="submit" className="btn btn-primary col-md-2 col-md-offset-5"> View Items
      </button>
    </Link>
    <Link to={`/admin/orders`} >
      <button type="submit" className="btn btn-primary col-md-2 col-md-offset-5"> View Orders </button>
    </Link>
  </div>

  );
}
