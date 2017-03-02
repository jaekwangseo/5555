// Items component to render the list of items taken from the props, which is linked to the state by the ItemsComponent

import React from 'react';

export default (props) => {

  return (
    <ul className="list-group">
      {
        props.itemList && props.itemList.map( (item) => (
          <li key={item.id} className="list-group-item">
            <h3 className="list-group-item-">titletitletitletitle</h3>
            <div className="list-group-item-text">
              {item.description}
            </div>
          </li>
        ))
      }
    </ul>
  );
};
