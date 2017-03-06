import React from 'react';

export default (props) => {

  const currentEditItem = props.currentEditItem;

  //Needed to display default value
  const ternary = currentEditItem ? currentEditItem.price : '';

  return (
        <div>
    { props.auth && props.auth.admin ?

      <form className="form-group" onSubmit={props.handleEditEvent}>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="item">Price</label>
            <input key= {ternary} name="price" type="number" min="0.0" defaultValue={currentEditItem.price} className="form-control" />
          </div>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="title">Title:</label>
            <input key= {ternary} name="title" type="text" className="form-control" defaultValue={currentEditItem.title} />
          </div>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="description">Description:</label>
            <input key= {ternary} name="description" type="text" className="form-control" defaultValue={currentEditItem.description} />
          </div>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="url">Image URL:</label>
            <input key= {ternary} name="url" type="text" pattern="www.+" className="form-control" id="url" defaultValue={currentEditItem.url} />
          </div>

          <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="category">Filter by Category</label> <br />
              <p><strong>Select the categories that fit your item. You may control-click (Windows) or command-click (Mac) to select more than one.</strong></p>
              <select multiple={true} size="6" name="category">
                {props.categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>

                  ))}

              </select>
          <button type="submit" className="btn btn-success col-md-2 col-md-offset-5" >Submit</button>
          </div>
      </form>
      : null
    };
    </div>

  );
};
