import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
var moment = require('moment');
export default class MealList extends Component {
  static defaultProps = {list: []}
  render() {

    if(this.props.list != undefined)
    var listItems = this.props.list.map(function(item) {

      var test = item.meal_recipe.map(function(eachMR) {
        return <li><Link to={"recipes/"+eachMR.recipe.slug}>{eachMR.recipe.name}</Link>, serves {eachMR.recipe.serves}, portion {eachMR.portion}, ${eachMR.cost.total.toFixed(2)}</li>
      }) ;

      return (
        <tr>
          <td>{item.name}</td>
          <td>{moment(item.when).format("ddd, MMMM Do, h:mm a")}</td>
          <td>{test}</td>
        </tr>
      );
    });

    return (
      <div>
        <Table bordered condensed>
          <thead>
          <tr>
            <th>name</th>
            <th>when</th>
            <th>recipes</th>
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
