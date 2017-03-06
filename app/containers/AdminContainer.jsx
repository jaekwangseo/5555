import { connect } from 'react-redux';
import React from 'react';
//import Admin from '../components/Admin.jsx';
import Items from '../components/Items.jsx';




//import {createReview, gettingItemReviews} from '../reducers/admin.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    itemList: state.item.itemList,
    selectedItem: state.item.selectedItem,
    auth: state.auth,
    reviews: state.reviews,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // createReview(reviewObj) {
    //   dispatch(createReview(reviewObj));
    // }
  };
};


class AdminContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleReview = this.handleReview.bind(this);
  }
    //this.props.getReviews(this.props.selectedItem.id);


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
      {this.props.auth ?
        <div>
        <Items itemList={this.props.itemList} />
        </div>
      :
      <div>
        <h1> ADMINS ONLY </h1>
      </div>
      }
    </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
