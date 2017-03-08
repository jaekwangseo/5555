// Items component to render the list of items taken from the props, which is linked to the state by the ItemsComponent

import React from 'react';
import { Link } from 'react-router';
//import EditItem from './EditItem.jsx';

export default function Items(props) {


  return (
    <div>
      <form className="review col-md-offset-5" onSubmit={props.handleFilterEvent}>
          <div className="form-group col-md-3">
            <label htmlFor="category">Filter by Category</label> <br />
            <input type="radio" name="category" value="Javascript" />  1
            <select name="category">
              {props.categories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
          </div>
          <br />
          <button type="submit" className="btn btn-info" >Submit</button>
      </form>
        <ul className="list-group">

        {
          props.itemList && props.itemList.map( (item) => {
          return (
            <li key={item.id} className="list-group-item col-md-6 col-md-offset-3">
              <img src={`http://${item.url}`}></img>
              <Link to={`/item/${item.id}`} >
                <h3 className="list-group-item-">{item.title}</h3>
              </Link>
              <div className="list-group-item-text">
                {item.description}
              </div>

              <div className="container button-wrapper">
	               <button className="btn-lg btn-success col-md-offset-3" onClick={(event) => {event.preventDefault(); props.addItemToCart(item.id);}}>Add <span className="glyphicon glyphicon-shopping-cart"></span></button>
              </div>

              {props.user && props.user.admin ?
                <div>
                  <button className='btn btn-danger' onClick={() => props.handleDeleteEvent(item.id)} >
                    Delete Item
                  </button>

                  <Link to={`/item/${item.id}/edit`} >
                    <button type="submit" className="btn btn-success col-md-2 col-md-offset-5"> Edit Item </button>
                  </Link>

                  <button className='btn btn-warning' onClick={() => props.setStatusToInactive(item.id)} >
                    Set Inactive
                  </button>

                </div>

                : null
              }

            </li>
          );
        }
        )
        }
      </ul>

      <Link to={'createItem'} >
        <button> Add Item </button>
       </Link>

    </div>

  );
}


