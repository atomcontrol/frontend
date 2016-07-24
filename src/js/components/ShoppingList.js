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
            return(<li>{item.recipe_name} - {item.quantity}  {item.quantity_unit}  {item.grams} grams (endrange: {item.quantity_endrange}) {/*(substitute: todo)*/} </li>)
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
