import React, { Component, PropTypes } from 'react';
import RecipeCard from './RecipeCard';
export default class RecipeList extends Component {

  render() {

    let recipeCards = [];
    let p = this.props.list;
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
        recipeCards.push(<RecipeCard key={p[key].id} recipe={p[key]}/>);
      }
    }

    return (
        <div className="recipe_card-grid">
          {recipeCards}
         </div>
    );
  }
}
