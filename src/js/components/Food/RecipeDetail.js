import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Panel} from 'react-bootstrap';

export default class RecipeDetail extends Component {

  render() {
    let r = this.props.recipe;
    if (r) {

      let instructionSections = [];
      let p = r.instruction_sections;
      for (let key in p) {
        if (p.hasOwnProperty(key)) {
          instructionSections.push(
            <div key={p[key].id}>
              <div className='recipe-detail_section-header'>{p[key].title}</div>
              <p>{p[key].body.split("\n").map(i => {
                return <p>{i}</p>;
              })}</p>
            </div>);
        }
      }

      let ingredientSections = [];
      let q = r.ingredient_sections;
      for (let key in q) {
        if (q.hasOwnProperty(key)) {

          let ingList = [];
          for(var ingr in q[key].ingredients) {
            let ingredient = q[key].ingredients[ingr];
            ingList.push(
              <div key={ingredient.id}>
                {ingredient.quantity}
                {(ingredient.quantity_endrange && ingredient.quantity_endrange!="0.00") ? "- "+ingredient.quantity_endrange : ' '}
                {ingredient.quantity_unit} {ingredient.ingredient.name}
                {(ingredient.grams) ? '('+ingredient.grams+' grams)' : ''}
              <div>
                {ingredient.substitute ? <li>substitute: {ingredient.substitute.name}</li> : ''}
                {ingredient.extras ? <li>extras: {ingredient.extras}</li> : '' }
              </div>
            </div>);
          }
          ingredientSections.push(
            <div key={q[key].id}>
              <div className='recipe-detail_section-header'>{q[key].title}</div>
              <div className='recipe-detail_ingredient-section-body' ><div>{ingList}</div></div>
              <br/>
            </div>);
        }
      }
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Panel>
                <div className="recipe-detail_hero-text">{r.name}</div>
                <img
                  src={"http://res.cloudinary.com/nickysemenza/image/upload/c_scale,h_300/recipe-hub/"+r.slug}
                   style={{"zIndex": "-1", "marginTop": "0px"}}/>
                <br/>
                <div className="recipe-detail_panel-header">instructions</div>
                {instructionSections}
              </Panel>
              {/*<Panel>
                <pre>{JSON.stringify(r.ingredient_sections, null, 2) }</pre>
              </Panel>*/}
            </Col>
            <Col xs={6} md={4}>
              <Panel style={{background: "#88313B"}}>
                <div className="recipe-detail_panel-header">ingredients</div>
                {ingredientSections}
              </Panel>
              <Panel style={{background: "#88313B"}}>
                <div className="recipe-detail_panel-header">recipe details</div>
                <ul className='recipe-detail_info-list'>
                  <li>makes: {r.makes_quantity} {r.makes_noun}</li>
                  <li>serves: {r.serves }</li>
                  <li>time: {r.time_details} ({r.time_total})</li>
                  <li>cost: ${r.cost.total.toFixed(2)}</li>
                  <li>cost per serving: ${(r.cost.total/r.serves).toFixed(2)}</li>
                </ul>

                <div className="recipe-detail_panel-header">tools</div>
                <ul className='recipe-detail_info-list'>
                  <li>aa</li>
                  <li>aa</li>
                </ul>

                <div className="recipe-detail_panel-header">info</div>
                <ul className='recipe-detail_info-list'>
                  <li>aa</li>
                  <li>aa</li>
                </ul>
              </Panel>
            </Col>
          </Row>
        </Grid>
      );
  }
    else
    { return(<div></div>);
    }
  }
}
