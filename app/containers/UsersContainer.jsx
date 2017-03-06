import { connect } from 'react-redux';
import React from 'react';
//import Admin from '../components/Admin.jsx';
import { browserHistory } from 'react-router';
import Users from '../components/Users.jsx';
import {deleteUserOnServer, setAdminOnUser} from '../reducers/user.jsx';


//import {createReview, gettingItemReviews} from '../reducers/admin.jsx';


const mapStateToProps = (state) => {
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
    deleteUserOnServer(userId) {
      dispatch(deleteUserOnServer(userId));
    },
    setAdminOnUser(userId){
      dispatch(setAdminOnUser(userId));
    }
  };
};


class UsersContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.promoteUserToAdmin = this.promoteUserToAdmin.bind(this);
  }


  handleDeleteUser(evt) {

    this.props.deleteUserOnServer(evt);
  }

  promoteUserToAdmin(evt) {

    console.log(evt);
    this.props.setAdminOnUser(evt);


  }


  render() {
    return (
    <div>
      {this.props.auth ?
        <div>
        <Users users={this.props.user.users} auth={this.props.auth} handleDeleteUser= {this.handleDeleteUser} promoteUserToAdmin={this.promoteUserToAdmin} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
