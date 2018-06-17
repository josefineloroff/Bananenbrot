import React from 'react'
import { Router, Route, Switch, NavLink as RouterLink } from 'react-router-dom'
import './MyNavbar.css'
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
} from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <RouterLink to="/">
            <NavbarBrand>BANANENBROT</NavbarBrand>
          </RouterLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-home">
                <RouterLink to="/">Home</RouterLink>
              </NavItem>
              <NavItem className="nav-bookmarks">
                <RouterLink to="/bookmarklist">Bookmarks</RouterLink>
              </NavItem>
              <NavItem className="nav-likes">
                <RouterLink to="/likelist">Likes</RouterLink>
              </NavItem>
              <NavItem className="nav-trashes">
                <RouterLink to="/trashlist">Trashes</RouterLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Privacy
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Account</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
