import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import {APIget} from '../Utils';

import RecipeList from '../components/RecipeList.js';

var RecipeContainer = React.createClass({
  getInitialState: function() {
    return {
      me: []
    }
  },

  loadData: function () {
    var _this = this;
    APIget("recipes").then(function(response) {
      _this.setState({recipeList: response})
    });
  },
  componentDidMount: function() {
    this.loadData();
  },

  render: function() {
    return (<RecipeList list={this.state.recipeList}/>);
  }
});

module.exports = RecipeContainer;
