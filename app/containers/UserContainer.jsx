import React from 'react';
import {connect} from 'react-redux';
import User from '../components/User';
import _ from 'lodash';

/*export class UserContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}*/

const mapStateToProps = (props, ownProps) => {
  const paramId = Number(ownProps.params.id);
  return {
    user: _.find(users, user => user.id === paramId)

  };
};

const mapDispatchToProps = {

};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);


//Dummy data
const users = [
  {
    id: 1,
    name: 'jaekwang',
    email: 'jaekwang@j.com',
    rating: 5,
    orders: [],
    items: []
  }
];
