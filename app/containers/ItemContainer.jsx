// import React from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';

/*class ItemContainer extends React.Component {

  render() {

    return (
      <div>
        <Item item={this.props.item} />
        <Reviews item={this.props.item> //Renders both a review form and all the review sof the item

      </div>
    );
  }
}*/

const mapStateToProps = (state, ownProps) => {
  //const paramId = Number(ownProps.params.id);
  return {
    item: state.item.selectedItem
  };
};

const mapDispatchToProps = {

};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);
