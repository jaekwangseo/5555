import React from 'react';
import {connect} from 'react-redux';
import User from '../components/User';

class UserContainer extends React.Component {

  render() {
    return (
      <div>
        <User user={this.props.user} currentUser={this.props.currentUser} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //const paramId = Number(ownProps.params.id);
  return {
    user: state.user.selectedSeller,
    currentUser: state.auth
  };
};

const mapDispatchToProps = {

};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);
