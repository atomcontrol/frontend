import React, { Component } from 'react';
import RecipeContainer from '../containers/RecipeContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class RecipePage extends Component {
  render() {
    let slug = this.props.params.slug;
    return (
      <div>
        <HeaderContainer/>
          <RecipeContainer slug={this.props.params.slug} />
      </div>
    );
  }
}


export default RecipePage;
