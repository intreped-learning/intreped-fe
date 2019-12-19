import React, { useState } from 'react';
import './NavBar.scss';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/">intrep<span>ed</span></NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Course Categories
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Engagement Strategies
            </DropdownItem>
            <DropdownItem>
              Classroom Management
            </DropdownItem>
            <DropdownItem>
              Culturally Responsive Teaching
            </DropdownItem>
            <DropdownItem>
              Lesson Planning
            </DropdownItem>
            <DropdownItem>
              Data
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
  )
}

export default NavBar;