// Items component to render the list of items taken from the props, which is linked to the state by the ItemsComponent

import React from 'react';
import { Link } from 'react-router';

//This funciton is currently static, and has dummy data.
// need to replace dummyData with something like:
// { props.itemList && props.itemList.map( (item, index) => (<li key={index}>{item.title}</li>)) }

export default function Items(props) {

  // const dummyData = [
  //   {user: 'Jacquin', price: 5000, title: 'Jacquin says hi'},
  //   {user: 'Eric', price: 123123123, title: 'Eric dances'},
  //   {user: 'Joey', price: 1, title: 'Joey sings'},
  //   {user: 'Jae', price: 40292, title: 'Jae pets bambam'}
  // ];

  return (
    <ul className="list-group">
      {
        props.itemList && props.itemList.map( (item) => (
          <li key={item.id} className="list-group-item">
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
