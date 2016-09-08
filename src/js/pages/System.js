import React, { Component } from 'react';
import SystemContainer from '../containers/SystemContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class SystemPage extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <SystemContainer />
      </div>
    );
  }
}


export default SystemPage;
