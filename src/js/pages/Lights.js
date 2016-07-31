import React, { Component } from 'react';
import LightContainer from '../containers/LightContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class LightPage extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
          <LightContainer />
      </div>
    );
  }
}
export default LightPage;
