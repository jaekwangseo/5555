/* Dumb Reviews Component will be rendered on the single item page along with the rest of those items reviews
*/

import React from 'react';

//Going to have reviews and a review form and this will be rendered on the single item page

export default (props) => {


  const starFunction = (rating) => {
    let arr = [];
    for (var i = 0; i < rating; i++){
      arr.push(<span className="rating" key={i}>☆</span>);
    }
    return arr;
  };

  return (
  <div>
    <form className="review" onSubmit={props.handleReview} >
        <div className="form-group col-md-offset-3 col-md-6">
          <input name="description" type="text"  pattern=".{10,}" required title="10 characters minimum" className="form-control" placeholder="Leave a review" />
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

    <div>
      <ul>
      { props.itemReviews && props.itemReviews.map( (item) => (
        <li key={item.id} className="list-group-item col-md-6 col-md-offset-3">
          <div className="list-item-rating">
              {starFunction(item.rating)}
            </div>
          <h3 className="list-group-item-"> {item.description} </h3>
        </li>
        ))
      }
      </ul>


    </div>

  </div>

  );
};
