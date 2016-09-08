import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

import FontAwesome from 'react-fontawesome';
var moment = require('moment');
export default class SpeedTestsDetail extends Component {
  static defaultProps = {list: {devices: {}}}
  render() {

    // if(this.props.list != undefined) {
    //   let scanDevices = this.props.list.devices;
    //
    //   var listItems = Object.keys(scanDevices).map(function (value, index) {
    //     let item = scanDevices[value];
    //     console.log(item);
    //
    //     return (
    //       <tr key={index}>
    //         <td>{value}</td>
    //         <td>{item.device.user ? item.device.user.first_name : "n/a"}</td>
    //         <td>{item.latest}</td>
    //       </tr>
    //     );
    //   });
    // }

    if(this.props.results) {
      let stats = this.props.results.stats;
      let latest = this.props.results.latest;
      return (
        <div>
          <FontAwesome name='download'/> {latest.download} Mbps ({stats.download.min} - {stats.download.max})<br/>
          <FontAwesome name='upload' /> {latest.upload} Mbps ({stats.upload.min} - {stats.upload.max})<br/>
          <FontAwesome name='cloud'/> {latest.ping} ms ({stats.ping.min} - {stats.ping.max})<br/>
          <i>last test {latest.when}</i>


        </div>
      );
    }
    else
      return (<div></div>)
  }
}
