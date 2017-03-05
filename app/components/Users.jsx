import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  console.log('PROPS------------------', props);

  return (
    <div>


      <ul className="list-group">
        {
          props.users && props.users.map( (user) => (

            <li key={user.id} className="list-group-user col-md-6 col-md-offset-3">
              <Link to={`/user/${user.id}`} >
                <h3 className="list-group-user-">{user.name}</h3>
              </Link>
              <div className="list-group-user-text">
                {user.email}
              </div>
              {props.auth && props.auth.admin ?
                <span id={user.id}  onClick={() => props.handleDeleteUser(user.id)}> X </span>
                : null
              }

            </li>
          ))
        }
      </ul>
    </div>


  );
};
