import React, { Component, PropTypes } from 'react';
import './RecipeCard.scss'
export default class RecipeCard extends Component {

  render() {
    let {
      name,
      time_total,
      slug,
      description } = this.props.recipe;
    return (
      <div className="card">
        <a>
          <img src={"http://res.cloudinary.com/nickysemenza/image/upload/c_fill,h_240,w_380/recipe-hub/"+slug+".jpg"} width="100%" className="card-img"/>
        </a>
        <div className="card-header">
          <a className="card-link">{name}</a>
          <div className="card-header-pull-right">{time_total}</div>
          <div style={{clear: 'both'}}></div>
        </div>
        <div className="card-text">{description}</div>
      </div>
    );
  }
}
