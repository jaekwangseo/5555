import React from 'react';
import { browserHistory } from 'react-router';
import {login} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

const Login = ({ login }) => (
  <div className="container">
  	<div className="login-container">
        <div id="output"></div>
        <div className="avatar"></div>
        <div className="form-box">
            <form onSubmit={evt => {
              evt.preventDefault();
              login(evt.target.user.value, evt.target.password.value);
              browserHistory.push('/');
            } }>
                <input name="user" type="text" placeholder="username" />
                <input name="password" type="password" placeholder="password" />
                <button className="btn btn-info btn-block login" type="submit">Login</button>
            </form>
        </div>
    </div>
  </div>
);



export default connect(
  null,
  {login},
)(Login);
