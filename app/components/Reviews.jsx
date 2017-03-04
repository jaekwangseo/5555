/* Dumb Reviews Component will be rendered on the single item page along with the rest of those items reviews
*/

import React from 'react';
import { Link } from 'react-router';


//Going to have reviews and a review form and this will be rendered on the single item page



export default (props) => {

  return (
    <form className="review" onSubmit={props.handleReview}>
        <div className="form-group col-md-offset-3 col-md-6">
          <label htmlFor="usr">Description:</label>
          <input name="description" type="text" className="form-control" placeholder="Leave a review" />
        </div>

        <div className="form-group col-md-offset-3 col-md-6">
          <label htmlFor="Rating">Rate the service!</label> <br />
          <input type="radio" name="rating" value="1" />  1
          <input type="radio" name="rating" value="2" />  2
          <input type="radio" name="rating" value="3" />  3
          <input type="radio" name="rating" value="4" />  4
          <input type="radio" name="rating" value="5" />  5
        </div>

        <button type="submit" className="btn btn-success col-md-2 col-md-offset-5" >Submit</button>
    </form>

  );
};
