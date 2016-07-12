import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import MainNavBar from '../components/Nav.js';
import {decodeJWT} from '../components/Test';


function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.status=='authenticated',
    user: state.user,
    name: state.user.data.slug

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logoutUser());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
