import React, { Component } from 'react';
import { connect } from 'react-redux';
import LightDash from "../components/Lights/LightDash";
import {APIget, APIput} from '../Utils';
var LightContainer = React.createClass({

  getInitialState: function() {
    return {
      lightList: null,
      shoppingList: null
    }
  },
  loadData: function () {
    var _this = this;
      APIget("lights").then(function(response) {
        _this.setState({lightList: response.list})
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
      <LightDash list={this.state.lightList}/>
    </div>);
  }
});

module.exports = LightContainer;
