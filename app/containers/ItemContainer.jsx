import React from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';
import {gettingItemReviews} from '../reducers/reviews.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';


const mapStateToProps = (state, ownProps) => {
  //const paramId = Number(ownProps.params.id);
  return {
    item: state.item.selectedItem,
    reviews: state.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews(item_id){
      dispatch(gettingItemReviews(item_id));
    }
  };

};

class ItemContainer extends React.Component{
  constructor(props){
    super(props);

  }




    // this.props.getReviews(this.props.selectedItem.id);



  render () {
    return (
      <div>
        <Item item={this.props.item}/>
        <ReviewsContainer />
      </div>
      );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemContainer);
