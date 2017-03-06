import NavBar from '../components/NavBar.jsx';

import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../reducers/auth.jsx';

const mapStateToProps = (state) => {

  return {
    auth: state.auth,
		currentUser: state.auth
  };
};

const mapDispatchToProps = dispatch => {
	return {
		logoutOnClick() {
			return dispatch(logout());
		}
	};
};

class NavBarContainer extends React.Component {

  render () {
    return (
      <NavBar handleLogoutClick={this.props.logoutOnClick} auth={this.props.auth}/>
    );
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(NavBarContainer);
