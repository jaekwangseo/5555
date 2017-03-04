// This is going to hold the state of the Reviews so that we can render it once someone submits a review


import { connect } from 'react-redux';
import React from 'react';
import Reviews from '../components/Reviews.jsx';
import {createReview} from '../reducers/reviews.jsx';


const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList,
    selectedItem: state.item.selectedItem,
    user: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview(reviewObj) {
      dispatch(createReview(reviewObj));
    }
  };
};


class ReviewsContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleReview = this.handleReview.bind(this);
  }

  handleReview(evt) {
    evt.preventDefault();

    const description = evt.target.description.value;
    const rating = evt.target.rating.value;
    const item_id = this.props.selectedItem.id;
    const subject_id = this.props.selectedItem.seller.id;
    const reviewer_id = this.props.user.id;

    const reviewObj = {
      description,
      rating,
      item_id,
      subject_id,
      reviewer_id
    };

    this.props.createReview(reviewObj);

  }

  render() {
    return (
      <div>
        <Reviews handleReview={this.handleReview} />
      </div>
    );
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
