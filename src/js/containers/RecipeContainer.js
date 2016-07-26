import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import {APIget, APIput} from '../Utils';

import RecipeList from '../components/Food/RecipeList.js';
import RecipeDetail from '../components/Food/RecipeDetail.js';
import RecipeEditor from '../components/Food/RecipeEditor.js';

var RecipeContainer = React.createClass({

  getInitialState: function() {
    return {
      recipeList: null,
      recipeDetail: null
    }
  },
  loadData: function (slug) {
    var _this = this;
    if(slug===undefined) {
      APIget("recipes").then(function(response) {
        _this.setState({recipeList: response})
      });
    }
    else {
      APIget("recipes/"+slug).then(function(response) {
        _this.setState({recipeDetail: response});
      });
    }
  },
  componentDidMount: function() {
    this.loadData(this.props.slug);
    console.log("mode is",this.props.mode);
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.slug != this.props.slug) {
      this.setState({recipeDetail: null})
      this.loadData(nextProps.slug);
    }
  },
  updateRecipe: function(aa) {
    console.log(aa);
    APIput("recipes/"+aa.slug,aa);
  },

  render: function() {
    if(this.props.mode=="edit")
      return(<RecipeEditor recipe={this.state.recipeDetail} updateRecipe={this.updateRecipe}/>);
    let view =
      (this.props.slug===undefined) ?
      <div className="container-fluid">
        <RecipeList list={this.state.recipeList}/>
      </div>
      :
      <RecipeDetail recipe={this.state.recipeDetail}/>;
    return (view);
  }
});

module.exports = RecipeContainer;
