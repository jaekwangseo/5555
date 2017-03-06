// Items component to render the list of items taken from the props, which is linked to the state by the ItemsComponent

import React from 'react';
import { Link } from 'react-router';
//import EditItem from './EditItem.jsx';



export default function Items(props) {

  const catOptionNames = [
    { value: 'one', label: 'javascript' },
    { value: 'two', label: 'joey', clearableValue: false }
];

  console.log('rendering items', props.categories);
  return (
    <div>
      <div className="section">
        <h3 className="section-heading">Multiselect</h3>
        <div className="Select Select--multi is-searchable">
          <div className="Select-control">
            <span className="Select-multi-value-wrapper" id="react-select-3--value">
              <div className="Select-placeholder">Select your favourite(s)</div>
              <div className="Select-input" style={{display: "inline-block" }}>
                <input role="combobox" aria-expanded="false" aria-owns="" aria-haspopup="false" aria-activedescendant="react-select-3--value" value="" style={{width: "500px"}} />


              </div>
              </span>
              <span className="Select-arrow-zone">
                <span className="Select-arrow">
                </span>
                </span>
            </div>
          </div>
          <div className="checkbox-list"><label className="checkbox"><input type="checkbox" className="checkbox-control" value="on" /><span className="checkbox-label">Disable the control</span></label><label className="checkbox"><input type="checkbox" className="checkbox-control" value="on" /><span className="checkbox-label">I don't like Chocolate (disabled the option)
          </span></label></div></div>

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
              <div className="container button-wrapper">
	               <button className="btn-lg btn-success col-md-offset-3" onClick={(event) => {event.preventDefault(); props.addItemToCart(item.id);}}>Add <span className="glyphicon glyphicon-shopping-cart"></span></button>
              </div>
              {props.user && props.user.admin ?
                <div>
                  <button onClick={() => props.handleDeleteEvent(item.id)} >
                    Delete Item
                  </button>

                  <Link to={`/item/${item.id}/edit`} >
                    <button type="submit" className="btn btn-success col-md-2 col-md-offset-5"> Edit Item </button>
                  </Link>
                </div>

                : null
              }

            </li>
          ))
        }
      </ul>

      <Link to={'createItem'} >
        <button> Add Item </button>
       </Link>



    </div>

  );
}


          <div className="form-group col-md-offset-1 col-md-3">
            <label htmlFor="category">Filter by Category</label> <br />
            <select name="category">
              {props.categories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>


/*
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
*/
