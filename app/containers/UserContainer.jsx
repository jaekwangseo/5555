import React from 'react';
import {connect} from 'react-redux';
import User from '../components/User';
import {gettingRating} from '../reducers/user.jsx';

class UserContainer extends React.Component {

  // for getting acutal user ratings not dummy data.
  // componentShouldUpdate() {
  //   console.log('props', this.props);
  //   this.props.gettingRating(this.props.user.id);
  // }

  render() {

    console.log('this.props for usercontainer', this.props);

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

const mapDispatchToProps = (dispatch) => {
  return {
    // gettingRating: userId => {
    //   dispatch(gettingRating(userId));
    // }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);
