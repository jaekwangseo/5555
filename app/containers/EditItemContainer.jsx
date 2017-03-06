// This is going to contain all of the items that are posted for sale on our homepage (or wherever we wanna see them)

import React from 'react';
import EditItem from '../components/EditItem.jsx';
import { connect } from 'react-redux';
import {updateEditItemToServer} from '../reducers/item.jsx';
import axios from 'axios';


const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList,
    currentEditItem: state.item.currentEditItem,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEditItemToServer: (item) => {
      dispatch(updateEditItemToServer(item));
    }
  };
};

class EditItemContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories: []
    };

    this.handleEditEvent = this.handleEditEvent.bind(this);
  }

  componentDidMount() {
    //Get categories for filter
    axios.get('/api/category')
    .then(res => res.data)
    .then(categories => this.setState({categories: categories}))
    .catch(err => console.error(err));
  }

  handleEditEvent(evt) {
    evt.preventDefault();
    const categoryArr = [...evt.target.category.options].filter(category => category.selected).map(category => category.value);

    const price = evt.target.price.value;
    const description = evt.target.description.value;
    const title = evt.target.title.value;
    const seller_id = this.props.auth.id;
    const id = this.props.currentEditItem.id;
    const item = {
      id,
      price,
      description,
      title,
      seller_id,
      categoryArr
    };

   this.props.updateEditItemToServer(item);

  }


  render(){
    return (
      <div>
        <EditItem itemList={this.props.itemList} handleEditEvent={this.handleEditEvent}currentEditItem={this.props.currentEditItem} auth={this.props.auth} categories={this.state.categories}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItemContainer);

