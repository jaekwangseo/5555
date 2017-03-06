// This is the dummy component for create item page

import React from 'react';

export default (props) => {

  return (

      <form className="form-group" onSubmit={props.handleCreatePost}>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="item">Price</label>
            <input name="price" type="number" step="0.01" min="0.0" className="form-control" placeholder="Enter price" />
          </div>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="title">Title:</label>
            <input name="title" type="text" className="form-control" placeholder="What are you selling?" />
          </div>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="description">Description:</label>
            <input name="description" type="text" className="form-control" placeholder="Enter an accurate description of what you're selling" />
          </div>
          <div className="form-group col-md-offset-3 col-md-6">
            <label htmlFor="url">Image URL:</label>
            <input name="url" type="url" className="form-control" id="url" placeholder="(e.g. https://www.linkedin.com/in/keanu-reeves-55643910/)" />
          </div>

          <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="category">Filter by Category</label> <br />
              <p><strong>Select the categories that fit your item. You may control-click (Windows) or command-click (Mac) to select more than one.</strong></p>
              <select multiple={true} size="6" name="category">
                {props.categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>

                  ))}

              </select>

            </div>

          <button type="submit" className="btn btn-success col-md-2 col-md-offset-5" >Submit</button>
      </form>

  );
};
