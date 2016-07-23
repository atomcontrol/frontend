import React, { Component, PropTypes } from 'react';
import RecipeCard from './RecipeCard';
export default class RecipeList extends Component {

  render() {

    let recipeCards = [];
    let p = this.props.list;
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
         console.log(key + " -> " + p[key]);
        recipeCards.push(<RecipeCard recipe={p[key]}/>);
      }
    }

    return (
      <div className="">
        <div className="card-grid">
          {recipeCards}
          </div>
        <hr/>
      </div>
    );
  }
}
