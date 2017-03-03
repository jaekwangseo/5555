// Items component to render the list of items taken from the props, which is linked to the state by the ItemsComponent

import React from 'react';
import { Link } from 'react-router';

export default function Items(props) {



  return (
    <ul className="list-group">
      {
        props.itemList && props.itemList.map( (item) => (
          <li key={item.id} className="list-group-item col-md-6 col-md-offset-3">
            <Link to={`/item/${item.id}`} >
              <h3 className="list-group-item-">{item.title}</h3>
            </Link>
            <div className="list-group-item-text">
              {item.description}
            </div>
          </li>
        ))
      }
    </ul>
  );
}
