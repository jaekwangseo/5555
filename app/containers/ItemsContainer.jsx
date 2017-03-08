import Items from '../components/Items';
import { connect } from 'react-redux';
import {groupingByCategory, deleteServerItem, addItemToServer, setStatusToInactive} from '../reducers/item.jsx';
import axios from 'axios';
import React from 'react';
import {addItemToCart} from '../reducers/order.jsx';


class ItemsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories: []
    };
    this.handleFilterEvent = this.handleFilterEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);

  }

  componentDidMount() {
    //Get categories for filter
    axios.get('/api/category')
    .then(res => res.data)
    .then(categories => this.setState({categories: categories}))
    .catch(err => console.error(err));
  }

  handleAddToCart(itemId) {
		this.props.addItemToCart(itemId);
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
      {this.props.user && this.props.user.admin ?

        <Items {...this.props} handleFilterEvent={this.handleFilterEvent} categories={this.state.categories} handleAddToCart={this.handleAddToCart} />
        :
        <Items {...this.props} handleFilterEvent={this.handleFilterEvent} handleDeleteEvent={this.handleDeleteEvent} categories={this.state.categories} handleAddToCart={this.handleAddToCart} setStatusToInactive={this.props.setStatusToInactive} />
      }

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList,
    user: state.auth,
    users: state.user.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    addItemToCart (itemId) {
      dispatch(addItemToCart(itemId));
    },

    groupingByCategory: (category) => {
      dispatch(groupingByCategory(category));
    },
    deleteServerItem: (id) => {
      dispatch(deleteServerItem(id));
    },
    addItemToServer: (item) => {
      dispatch(addItemToServer(item));
    },
    setStatusToInactive: (itemId) => {
      dispatch(setStatusToInactive(itemId));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
