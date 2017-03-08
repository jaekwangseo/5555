import React from 'react';
// import { Link } from 'react-router';


export default (props) => {

  return (
    <div className="list-group-item col-md-6 col-md-offset-3">
      <ul className="list-group">
        <li className="section">an order number 1:
          <div>Item 1: name
            <div>item1's price: $xx</div>
            <div>item1 quatity: xx</div>
            <div>item1 </div>
          </div>
        </li>
        <li>an order number 2:
          <div>Item 2: name
            <div>item2's price: $xx</div>
            <div>item2 quatity: xx</div>
            <div>item2 </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

//need to be sorted by the updated_at column... but all of the orders into an array, sort it by the updated at thing, map <li>.
