// This is the dummy component for create user page

import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  return (
    <form className="form-group" onSubmit={props.handleSubmit}>
        <div className="form-group col-md-offset-3 col-md-6">
          <label htmlFor="usr">Name:</label>
          <input name="userName" type="text" className="form-control" id="usr" placeholder="Firstname Lastname (e.g. Blake Lively)" />
        </div>
        <div className="form-group col-md-offset-3 col-md-6">
          <label htmlFor="pwd">Password:</label>
          <input name="password" type="password" className="form-control" id="pwd" />
        </div>
        <div className="form-group col-md-offset-3 col-md-6">
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" className="form-control" id="email" />
        </div>
        <div className="form-group col-md-offset-3 col-md-6">
          <label htmlFor="url">URL:</label>
          <input name="url" type="url" className="form-control" id="url" placeholder="(e.g. https://www.linkedin.com/in/keanu-reeves-55643910/)" />
        </div>
        <div className="form-group col-md-offset-3 col-md-6">
          <label htmlFor="email">Description:</label>
          <textarea name="description" className="form-control" rows="5" cols="80" id="TITLE" placeholder="(e.g. Javascript expert, Back-end Web Development)" />
        </div>
        <button type="submit" className="btn btn-success col-md-2 col-md-offset-5" >Submit</button>
        <br />
        <br />
        <Link to='/login' className="col-md-2 col-md-offset-5" >Already have an account?</Link>
    </form>
  );
};
