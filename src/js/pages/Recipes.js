import React, { Component } from 'react';
import RecipeContainer from '../containers/RecipeContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class UserSettingsPage extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <div className="container-fluid">
          <RecipeContainer/>
        </div>
      </div>
    );
  }
}


export default UserSettingsPage;
