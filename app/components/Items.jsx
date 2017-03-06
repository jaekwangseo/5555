// Items component to render the list of items taken from the props, which is linked to the state by the ItemsComponent

import React from 'react';
import { Link } from 'react-router';

export default function Items(props) {


  console.log('rendering items', props);
  return (
    <div>
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
              <button className="add-to-cart" onClick={(event) => {event.preventDefault(); props.addItemToCart(item.id);}} >Add to cart</button>
              {props.user && props.user.admin ?
                <div>
                  <button onClick={() => props.handleDeleteUser(item.id)} >
                    Delete Item
                  </button>

                  <button onClick={() => console.log('implement edit feature')} >
                    Add Item
                  </button>
                </div>

                : null
              }
            </li>
          ))
        }
      </ul>

      <button onClick={() => console.log('implement add item')} >
          Add Item
      </button>

      <form className="review" onSubmit={props.handleFilterEvent}>


          <div className="form-group col-md-offset-1 col-md-3">
            <label htmlFor="category">Filter by Category</label> <br />
            <input type="radio" name="category" value="Javascript" />  1
            <select name="category">
              {props.categories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>

                ))}

            </select>

          </div>

          <button type="submit" className="btn btn-success col-md-2 col-md-offset-5" >Submit</button>
      </form>
    </div>

  );
}
