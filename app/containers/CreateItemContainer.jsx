// This is going to contain the form needed to create an item

import React from 'react';
import CreateItem from '../components/CreateItem';
import { connect } from 'react-redux';
import {addItemToServer} from '../reducers/item.jsx';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    itemList: state.item.itemList,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToServer: (item) => {
      dispatch(addItemToServer(item));
    }
  };
};

class CreateItemContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories: []
    };

    this.handleCreatePost = this.handleCreatePost.bind(this);
  }

  componentDidMount() {
    axios.get('/api/category')
    .then(res => res.data)
    .then(categories => this.setState({categories: categories}))
    .catch(err => console.error(err));
  }


  handleCreatePost(evt) {
    evt.preventDefault();

    const categoryArr = [...evt.target.category.options].filter(category => category.selected).map(category => category.value);

    const price = evt.target.price.value;
    const description = evt.target.description.value;
    const title = evt.target.title.value;
    const seller_id = this.props.auth.id;
    const item = {
      price,
      description,
      title,
      seller_id,
      categoryArr
    };
    //Dispatch to add item
    this.props.addItemToServer(item);
  }

  render(){
    return (
      <div>
        <CreateItem handleCreatePost={this.handleCreatePost}  categories={this.state.categories} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemContainer);

