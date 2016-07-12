import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../actions/users';
import AppComponent from '../components/App.js';

function mapStateToProps(state) {
  return {
    authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
    isAuthenticated: state.user.status=='authenticated',
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () =>{
      localStorage.removeItem('jwtToken'); //remove token from storage
      dispatch(resetToken());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
