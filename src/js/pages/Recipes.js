import React, { Component } from 'react';
import RecipeContainer from '../containers/RecipeContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class RecipePage extends Component {
  render() {
    let {slug, mode} = this.props.params;
    return (
      <div>
        <HeaderContainer/>
          <RecipeContainer slug={slug} mode={mode} />
      </div>
    );
  }
}


export default RecipePage;
