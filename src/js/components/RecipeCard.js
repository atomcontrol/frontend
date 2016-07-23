import React, { Component, PropTypes } from 'react';
import './RecipeCard.scss'
import {Link} from 'react-router';
export default class RecipeCard extends Component {

  render() {
    let {
      name,
      time_total,
      slug,
      description } = this.props.recipe;
    return (
      <div className="recipe_card">
        <Link to={"/recipes/"+slug}>
          <img src={"http://res.cloudinary.com/nickysemenza/image/upload/c_fill,h_240,w_380/recipe-hub/"+slug+".jpg"} width="100%" className="recipe_card-img"/>
        </Link>
        <div className="recipe_card-header">
          <Link to={"/recipes/"+slug} className="recipe_card-link">{name}</Link>
          <div className="recipe_card-header-pull-right">{time_total}</div>
          <div style={{clear: 'both'}}></div>
        </div>
        <div className="recipe_card-text">{description}</div>
      </div>
    );
  }
}
8
