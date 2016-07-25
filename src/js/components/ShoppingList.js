import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
var moment = require('moment');
export default class ShoppingList extends Component {
  static defaultProps = {list: []}
  render() {


    let listItems = [];
    if(this.props.list != undefined)
    {
      let list = this.props.list;
      for(var item in list) {
        if(list.hasOwnProperty(item)) {

          let dependencies = list[item].deps.map(function(item) {
            return(<li>{item.recipe_name}: {item.quantity} {item.quantity_endrange != 0 ? "-"+item.quantity_endrange : ''} {item.quantity_unit}  {item.grams != 0 ? "("+item.grams + " grams)" : ''} {item.substitute ? "(substitute: " + item.substitute.name + ")": ''} </li>)
          });
          listItems.push(
           <tr key={item}>
            <td>{list[item].name}</td>
            <td>{list[item].items.quantity.toFixed(2)} {list[item].items.quantity_unit}</td>
            <td>{dependencies}</td>
          </tr>)
        }
      }
    }

    return (
      <div>
        <Table bordered condensed>
          <thead>
          <tr>
            <th>ingredient</th>
            <th>quantity</th>
            <th>info</th>
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
