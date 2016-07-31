import React, { Component, PropTypes } from 'react';
import PrettyJSON from '../../components/PrettyJSON';
import {Table} from 'react-bootstrap';
export default class LightDash extends Component {

  render() {


    let lightTableItems;
    if(this.props.list)
    lightTableItems= this.props.list.map(function(light){
      return (<tr key={light.id}><td>{light.id}</td><td>{light.name}</td></tr>);
    });


    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>Lights</h2>
            <Table bordered condensed>
              <thead>
              <tr>
                <th>id</th>
                <th>name</th>
              </tr>
              </thead>
              <tbody>
              {lightTableItems}
              </tbody>
            </Table>

            <h2>Animation Presets</h2>
          </div>
          <div className="col-md-6">
            <PrettyJSON data={this.props.list}/>
          </div>
        </div>
      </div>
    );
  }
}
LightDash.defaultProps  = {test: 2}
