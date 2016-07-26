import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Panel} from 'react-bootstrap';
import './Recipe.scss'

export default class RecipeEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {recipe: null};
  };
  componentWillReceiveProps(nextProps) {
    if(nextProps.recipe != this.props.recipe) {
      console.log(nextProps.recipe);
      this.setState({recipe: nextProps.recipe});
    }
  };
  addInstructionSection() {
    console.log('adding');
    this.state.recipe.instruction_sections.push({body:"body",title:"title"});
    this.forceUpdate();
  };
  addIngredientSection() {
    console.log('adding');
    this.state.recipe.ingredient_sections.push({
      ingredients:[
        {
          ingredient: {
            name: "ingredient name"
          },
          quantity: '',
          substitute: '',
          quantity_endrange: '',
          quantity_unit: '',
          grams: '',
          extras: '',
        }],
      title:"title"});
    this.forceUpdate();
  };
  handleChange = (e, aa, key) => {
    let level = aa ? aa : "root";

    console.log(key,"ok",e.target.name,"-",e.target.value, "@"+level);

    if(level != 'root') {
      this.state.recipe[level][key][e.target.name] = e.target.value;
      this.forceUpdate();
      return;
    }

    let newstate = {};
    newstate[e.target.name]=e.target.value;
    var state = Object.assign(this.state, {
      recipe: Object.assign(this.state.recipe, newstate),
    });

    this.setState(state);
  };
  handleIngredientChange = (e, index1, index2, sub) => {
    console.log(index1, index2 ,"=>",e.target.name,"-",e.target.value);
    if(sub===undefined)
      this.state.recipe.ingredient_sections[index1].ingredients[index2][e.target.name]=e.target.value;
    else
      this.state.recipe.ingredient_sections[index1].ingredients[index2][sub][e.target.name]=e.target.value;
    this.forceUpdate();
  };

  deleteInstructionSection = (index) => {
    this.state.recipe.instruction_sections.splice(index,1);
    this.forceUpdate();
  };
  deleteIngredientSection = (index) => {
    this.state.recipe.ingredient_sections.splice(index,1);
    this.forceUpdate();
  };
  addIngredientItem = (index) => {
    this.state.recipe.ingredient_sections[index].ingredients.push({
      ingredient: {
        name: "ingredient name"
      },
      quantity: '',
      substitute: '',
      quantity_endrange: '',
      quantity_unit: '',
      grams: '',
      extras: '',
    });
    this.forceUpdate();
  };
  delIngredientItem = (index1, index2 ) => {
    this.state.recipe.ingredient_sections[index1].ingredients.splice(index2,1);
    this.forceUpdate();
  };
  render() {
    let r = this.state.recipe;
    if(r) {

      let instructionSections = r.instruction_sections.map((item, index) =>
       <tr key={index}>
        <td>
          <input className="recipe-editor-input" type="text" onChange={ (e) => this.handleChange(e,"instruction_sections", index)} name="title" value={item.title}/>
        </td>
        <td><textarea className="recipe-editor-input" type="text" onChange={ (e) => this.handleChange(e,"instruction_sections", index)} name="body" value={item.body}/></td>
        <td><button className="button-primary-wide" onClick={() => this.deleteInstructionSection(index)}>delete section</button></td>
      </tr>);


      let ingredientSections = [];
      for(let index in r.ingredient_sections) {
        let item = r.ingredient_sections[index];

        let ingList = [];
        for(let index2 in item.ingredients) {
          let ingr = item.ingredients[index2];
          let sub = ingr.substitute ? <td><input className="recipe-editor-input" type="text" onChange={(e) => this.handleIngredientChange(e, index, index2, "substitute")} name="name" value={ingr.substitute.name}/></td> : <td>sub</td>;
          ingList.push(
            <tr key={index+"-"+index2}>
              <td><input className="recipe-editor-input" type="text" onChange={(e) => this.handleIngredientChange(e, index, index2)} name="quantity" value={ingr.quantity}/></td>
              <td><input className="recipe-editor-input" type="text" onChange={(e) => this.handleIngredientChange(e, index, index2)} name="quantity_endrange" value={ingr.quantity_endrange}/></td>
              <td><input className="recipe-editor-input" type="text" onChange={(e) => this.handleIngredientChange(e, index, index2)} name="quantity_unit" value={ingr.quantity_unit}/></td>

              <td><input className="recipe-editor-input" type="text" onChange={(e) => this.handleIngredientChange(e, index, index2, "ingredient")} name="name" value={ingr.ingredient.name}/></td>
              <td><input className="recipe-editor-input" type="text" onChange={(e) => this.handleIngredientChange(e, index, index2)} name="grams" value={ingr.grams}/></td>
              <td><input className="recipe-editor-input" type="text" onChange={(e) => this.handleIngredientChange(e, index, index2)} name="extras" value={ingr.extras}/></td>
              <td>{sub}</td>
              <td><button className="button-primary-wide" onClick={() => this.delIngredientItem(index, index2)}>del line item</button></td>
            </tr>);
        }

        ingredientSections.push(<tr key={index}>
          <td>
            <input className="recipe-editor-input" type="text" onChange={ (e) => this.handleChange(e,"ingredient_sections", index)} name="title" value={item.title}/>
          </td>
          <td>
            <table>
              <thead>
                <tr>
                  <th>quantity</th>
                  <th>-range</th>
                  <th>unit</th>
                  <th>ingredient</th>
                  <th>grams</th>
                  <th>extras</th>
                  <th>substitute</th>
                </tr>
              </thead>
              <tbody>
                {ingList}
              </tbody>
            </table>
          </td>
          <td>
            <button className="button-primary-wide" onClick={() => this.deleteIngredientSection(index)}>delete section</button>
            <button className="button-primary-wide" onClick={() => this.addIngredientItem(index)}>add line item</button>
          </td>
        </tr>);
      }

      return (
        <div className="container-fluid">
          <div>
            <div className="recipe-editor-label">name</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="name" value={r.name}/>
          </div>
          <div>
            <div className="recipe-editor-label">slug</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="slug" value={r.slug}/>
          </div>
          <div>
            <div className="recipe-editor-label">description</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="description"
                   value={r.description}/>
          </div>
          <div>
            <div className="recipe-editor-label">serves</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="serves" value={r.serves}/>
          </div>
          <div>
            <div className="recipe-editor-label">makes_quantity</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="makes_quantity"
                   value={r.makes_quantity}/>
          </div>
          <div>
            <div className="recipe-editor-label">makes_noun</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="makes_noun"
                   value={r.makes_noun}/>
          </div>
          <div>
            <div className="recipe-editor-label">time_total</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="time_total"
                   value={r.time_total}/>
          </div>
          <div>
            <div className="recipe-editor-label">time_details</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="time_details"
                   value={r.time_details}/>
          </div>
          <div>
            <div className="recipe-editor-label">source</div>
            <input className="recipe-editor-input" type="text" onChange={this.handleChange} name="source" value={r.source}/>
          </div>

          <button className="button-primary-wide" onClick={() => this.props.updateRecipe(this.state.recipe)}>save</button>

          <hr/>
          <h3>Instruction Sections</h3>
          <table style={{width: "100%", border: "1px solid white"}}>
            <thead>
            <tr>
              <th>section</th>
              <th>instructions</th>
              <th>actions</th>
            </tr>
            </thead>
            <tbody>
              {instructionSections}
            </tbody>
          </table>
          <button className="button-primary-wide" onClick={() => this.addInstructionSection()}>add instruction</button>

          <hr/>
          <h3>Ingredient Sections</h3>
          <table style={{width: "100%", border: "1px solid white"}}>
            <thead>
            <tr>
              <th>section</th>
              <th>ingredients</th>
              <th>actions</th>
            </tr>
            </thead>
            <tbody>
            {ingredientSections}
            </tbody>
          </table>
          <button className="button-primary-wide" onClick={() => this.addIngredientSection()}>add ingredient</button>

        </div>
      );
    }
    else
      return(<h1>hi</h1>)
  }
}
