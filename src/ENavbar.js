import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export class ENavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="fixed-top" color="light" light expand="md">
          <NavbarBrand href="/"><img className="logo" alt="docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" width="30%"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navitem " navbar>
              <NavItem>
                <NavLink href="/components/">About us</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/career/">Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Departments</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Marketing and PR</DropdownItem><DropdownItem divider />
                  <DropdownItem>Customer success and sales</DropdownItem><DropdownItem divider />
                  <DropdownItem>IT,Product,Design and UX</DropdownItem><DropdownItem divider />
                  <DropdownItem>Finance and Administration</DropdownItem><DropdownItem divider />
                  <DropdownItem>HR and more</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ENavbar;
