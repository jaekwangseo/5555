// This is going to have the items... do i need this?? can i just do everything in the itemsconatiner??

import React from 'react';

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

  console.log(props.itemList);

  return (
    <ul className="list-group">
      {
        props.itemList && props.itemList.map( (item) => (<li key={item.id} className="list-group-item">{item.description}</li>))
      }
    </ul>
  );
}
