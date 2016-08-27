import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
var moment = require('moment');
export default class MealList extends Component {
  static defaultProps = {list: []}
  render() {

    if(this.props.list != undefined)
      var listItems = this.props.list.map(function(item) {

        var usage = item.usage.map(function(eachUsage) {
          return <li key={eachUsage.id}>{eachUsage.parent_section.recipe.name}</li>
        }) ;

        return (
          <tr key={item.id}>
            <td>{item.name} ({item.id})</td>
            <td>{usage}</td>
            <td>${item.price} per {item.price_unit}</td>
          </tr>
        );
      });

    return (
      <div>
        <Table bordered condensed>
          <thead>
          <tr>
            <th>ingredient</th>
            <th>used by</th>
            <th>price</th>
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
