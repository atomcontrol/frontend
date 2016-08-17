import React, { Component } from 'react';
import {APIget, APIput} from '../Utils';
import IngredientsList from '../components/Food/IngredientsList';
var IngredientsContainer = React.createClass({

  getInitialState: function() {
    return {
      ingredientsList: null
    }
  },
  loadData: function () {
    var _this = this;
    APIget("recipes/ingredients").then(function(response) {
      _this.setState({ingredientsList: response})
    });
  },
  componentDidMount: function() {
    this.loadData();
  },
  render: function() {
    return(<div className="container">
      <h1>Ingredients</h1>
      <IngredientsList list={this.state.ingredientsList}/>
    </div>);
  }
});

module.exports = IngredientsContainer;
