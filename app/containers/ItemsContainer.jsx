// This is going to contain all of the items that are posted for sale on our homepage (or wherever we wanna see them)

import React from 'react';
import Items from '../components/Items';
import { connect } from 'react-redux';
import {groupingByCategory, deleteServerItem} from '../reducers/item.jsx';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList,
    user: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    groupingByCategory: (category) => {
      dispatch(groupingByCategory(category));
    },
    deleteServerItem: (id) => {
      dispatch(deleteServerItem(id));
    }
  };
};

class ItemsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories: []
    };
    this.handleFilterEvent = this.handleFilterEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);

  }

  componentDidMount() {
    axios.get('/api/category')
    .then(res => res.data)
    .then(categories => this.setState({categories: categories}))
    .catch(err => console.error(err));
  }

  handleDeleteEvent(evt) {

    this.props.deleteServerItem(evt);
  }

  handleFilterEvent(evt) {
    evt.preventDefault();
    const category = evt.target.category[1].value;
    this.props.groupingByCategory(category);
  }

  render(){
    return (
      <div>
        <Items itemList={this.props.itemList} handleFilterEvent={this.handleFilterEvent} handleDeleteEvent={this.handleDeleteEvent} user= {this.props.user} categories={this.state.categories} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);

