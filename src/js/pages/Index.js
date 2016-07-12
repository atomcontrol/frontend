import React, { Component } from 'react';
import {Link} from 'react-router';
import HeaderContainer from '../containers/HeaderContainer';
class Index extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <div className="homepage">
          <h1 style={{fontSize: '80px'}}>A.T.O.M.</h1>
          </div>
      </div>
    );
  }
}


export default Index;
