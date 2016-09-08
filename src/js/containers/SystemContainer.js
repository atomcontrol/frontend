import React, { Component } from 'react';
import {APIget, APIput} from '../Utils';
import NetworkScansList from '../components/System/NetworkScansList';
var SystemContainer = React.createClass({

  getInitialState: function() {
    return {
      networkScans: null
    }
  },
  loadData: function () {
    var _this = this;
    APIget("system/network/devices").then(function(response) {
      _this.setState({networkScans: response})
    });
  },
  componentDidMount: function() {
    this.loadData();
  },
  render: function() {
    return(<div className="container">
      <h1>System</h1>
      <h2>Network Devices</h2>
      <NetworkScansList list={this.state.networkScans}/>
    </div>);
  }
});

module.exports = SystemContainer;
