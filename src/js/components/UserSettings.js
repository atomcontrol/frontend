import React, { Component, PropTypes } from 'react';
import {APIget} from '../Utils';
export default class UserSettings extends Component {

  // constructor(props) {
  //   super(props);
  //   this.props={me: {first_name: null}};
  // }

  render() {

    let userproperties = [];
    let p = this.props.me;
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
        // console.log(key + " -> " + p[key]);
        userproperties.push(<li key={key}>{key}-> {p[key]}</li>);
      }
    }

    return (
      <div className="container">
        <div className="card"></div>
        {userproperties}
        <hr/>
        <button className="button-primary-wide" onClick={this.props.reload}>Reload Data</button>
         {this.props.me.first_name}
      </div>
    );
  }
}
