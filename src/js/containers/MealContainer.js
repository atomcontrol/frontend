import React, { Component } from 'react';
import { connect } from 'react-redux';
import {APIget, APIput} from '../Utils';
import MealList from '../components/MealList';
import ShoppingList from '../components/ShoppingList';
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
      <MealList list={this.state.mealList}/>
      <ShoppingList list={this.state.shoppingList}/>
    </div>);
  }
});

module.exports = MealContainer;
