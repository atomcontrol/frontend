import React, { Component, PropTypes } from 'react';
import {test1, APIget} from '../Utils';
import { Link } from 'react-router';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './navbar.scss';
export default class MainNavBar extends Component {
  render() {
    test1("aay");
    APIget("users/me").then(a => console.log("BODY:",a));
    return (
      <Navbar className="navbar-custom">
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/" activeClassName="active">
              <a>ATOM</a>
            </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            <LinkContainer to="/recipes"><NavItem eventKey={2}>Recipes</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            {
              this.props.isAuthenticated
                ?
             <NavDropdown eventKey={3} title={this.props.name} id="basic-nav-dropdown">
              <LinkContainer to="/settings"><MenuItem eventKey={3.1}>Settings</MenuItem></LinkContainer>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
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
