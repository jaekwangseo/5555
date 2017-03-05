// This is going to contain all of the items that are posted for sale on our homepage (or wherever we wanna see them)

import React from 'react';
import Items from '../components/Items';
import { connect } from 'react-redux';
import {groupingByCategory} from '../reducers/item.jsx';


const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    groupingByCategory: (category) => {
      dispatch(groupingByCategory(category));
    }
  };
};

class ItemsContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleFilterEvent = this.handleFilterEvent.bind(this);

  }

  handleFilterEvent(evt) {
    evt.preventDefault();
    const category = evt.target.category[1].value;
    this.props.groupingByCategory(category);
  }

  render(){
    return (
      <div>
        <Items itemList={this.props.itemList} handleFilterEvent={this.handleFilterEvent} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);

