import React from 'react';
import { Link } from 'react-router';

export default (props) => {



  return (
    <div>


      <ul className="list-group">
        {
          props.auth && props.auth.admin && props.users && props.users.map( (user) => (

            <li key={user.id} className="list-group-user col-md-6 col-md-offset-3">
              <Link to={`/user/${user.id}`} >
                <h3 className="list-group-user-">{user.name}</h3>
              </Link>
              <div className="list-group-user-text">
                {user.email}

                <button onClick={() => props.handleDeleteUser(user.id)} >X</button>

              </div>

              {!user.admin ?
                <button key={user.id} onClick={() => props.promoteUserToAdmin(user.id)} >Make Admin</button>
                : null

              }

            </li>
          ))
        }
      </ul>
    </div>


  );
};
