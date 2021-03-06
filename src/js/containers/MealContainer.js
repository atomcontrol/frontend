import React, { Component } from 'react';
import { connect } from 'react-redux';
import {APIget, APIput} from '../Utils';
import MealList from '../components/Food/MealList';
import ShoppingList from '../components/Food/ShoppingList';
var MealContainer = React.createClass({

  getInitialState: function() {
    return {
      mealList: null,
      shoppingList: null
    }
  },
  loadData: function () {
    var _this = this;
      APIget("meals").then(function(response) {
        _this.setState({mealList: response})
      });
    APIget("meals/shoppinglist").then(function(response) {
      _this.setState({shoppingList: response})
    });
  },
  componentDidMount: function() {
    this.loadData();
  },
  render: function() {
    return(<div className="container">
      <h1>Meals</h1>
      <MealList list={this.state.mealList}/>
      <h1>Ingredients</h1>
      <ShoppingList list={this.state.shoppingList}/>
    </div>);
  }
});

module.exports = MealContainer;
