import React, { Component } from 'react';
import MealContainer from '../containers/MealContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class MealPage extends Component {
  render() {
    let {slug, mode} = this.props.params;
    return (
      <div>
        <HeaderContainer/>
          <MealContainer slug={slug} mode={mode} />
      </div>
    );
  }
}


export default MealPage;
