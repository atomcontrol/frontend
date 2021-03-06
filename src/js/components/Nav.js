import React, { Component, PropTypes } from 'react';
import { APIget} from '../Utils';
import { Link } from 'react-router';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './navbar.scss';
export default class MainNavBar extends Component {
  render() {
    //APIget("users/me").then(a => console.log("BODY:",a));
    return (
      <Navbar className="navbar-custom">
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/">
              <a>home</a>
            </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Food" id="basic-nav-dropdown">
              <LinkContainer to="/recipes"><MenuItem eventKey={3.1}>Recipes</MenuItem></LinkContainer>
              <LinkContainer to="/meals"><MenuItem eventKey={3.2}>Meals</MenuItem></LinkContainer>
              <LinkContainer to="/ingredients"><MenuItem eventKey={3.3}>Ingredients</MenuItem></LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            <LinkContainer to="/lights"><NavItem eventKey={4}>Lights</NavItem></LinkContainer>
            <LinkContainer to="/system"><NavItem eventKey={5}>System</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            {
              this.props.isAuthenticated
                ?
             <NavDropdown eventKey={3} title={this.props.name} id="basic-nav-dropdown">
              <LinkContainer to="/settings"><MenuItem eventKey={3.1}>Settings</MenuItem></LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={3.3} onClick={() => { this.props.logout(); }}>Log out</MenuItem>
            </NavDropdown>
              :
            <LinkContainer to="/signin"><NavItem eventKey={4}>Sign In</NavItem></LinkContainer>
            }




          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
