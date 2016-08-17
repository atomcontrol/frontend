import React, { Component } from 'react';
import IngredientsContainer from '../containers/IngredientsContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class IngredientsPage extends Component {
  render() {
    let {slug, mode} = this.props.params;
    return (
      <div>
        <HeaderContainer/>
        <IngredientsContainer slug={slug} mode={mode} />
      </div>
    );
  }
}
export default IngredientsPage;
