import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import {APIget} from '../Utils';

import UserSettings from '../components/UserSettings.js';

//
//
// function mapStateToProps(state) {
//   return {
//     authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
//     isAuthenticated: state.user.status=='authenticated',
//     user: state.user
//   };
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     logout: () => {
//       dispatch(logoutUser());
//     }
//   }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);

// APIget("users/me").then(a => {this.state.me = a; console.log('received',a)});


var UserSettingsContainer = React.createClass({
  getInitialState: function() {
    return {
      me: []
    }
  },

  loadData: function () {
    var _this = this;
    APIget("users/me").then(function(response) {
      _this.setState({me: response})
    });
  },
  componentDidMount: function() {
    this.loadData();
  },

  render: function() {
    return (<UserSettings me={this.state.me} reload={this.loadData}/>);
  }
});

module.exports = UserSettingsContainer;
