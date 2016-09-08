import React, { Component } from 'react';
import {APIget, APIput} from '../Utils';
import NetworkScansList from '../components/System/NetworkScansList';
import SpeedTestsDetail from '../components/System/SpeedTestsDetail';
var SystemContainer = React.createClass({

  getInitialState: function() {
    return {
      networkScans: null,
      speedTestResults: null
    }
  },
  loadData: function () {
    var _this = this;
    APIget("system/network/devices").then(function(response) {
      _this.setState({networkScans: response})
    });
    APIget("system/network/speed").then(function(response) {
      _this.setState({speedTestResults: response})
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
      <h2>Network Speed</h2>
      <SpeedTestsDetail results={this.state.speedTestResults}/>
    </div>);
  }
});

module.exports = SystemContainer;
