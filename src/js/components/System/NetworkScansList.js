import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
var moment = require('moment');
export default class NetworkScansList extends Component {
  static defaultProps = {list: {devices: {}}}
  render() {

    if(this.props.list != undefined) {
      let scanDevices = this.props.list.devices;

      var listItems = Object.keys(scanDevices).map(function (value, index) {
        let item = scanDevices[value];
        console.log(item);

        return (
          <tr key={index}>
            <td>{value}</td>
            <td>{item.device.user ? item.device.user.first_name : "n/a"}</td>
            <td>{item.latest}</td>
          </tr>
        );
      });
    }

    return (
      <div>
        <Table bordered condensed>
          <thead>
          <tr>
            <th>device</th>
            <th>user</th>
            <th>last seen</th>
          </tr>
          </thead>
          <tbody>
          {listItems}
          </tbody>
        </Table>



      </div>
    );
  }
}
